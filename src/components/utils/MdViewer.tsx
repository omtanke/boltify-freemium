import { FC, useState } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown, { Options } from 'react-markdown';
import classNames from 'classnames';
import useMdToString from '@/hooks/useMdToString';
import useDarkMode from '@/hooks/useDarkMode';
import Button from '@/components/ui/Button';

interface IMdViewerProps extends Partial<Options> {
	mdFile?: RequestInfo | URL;
	className?: string;
	code?: string;
	format?: string;
}
const MdViewer: FC<IMdViewerProps> = (props) => {
	const { mdFile, code, format = 'tsx', className: classes } = props;

	const content = useMdToString(mdFile || '');

	const { isDarkTheme } = useDarkMode();

	const [copyOk, setCopyOk] = useState(false);
	const handleClick = () => {
		navigator.clipboard

			.writeText(content.replace(/```[^]*?\n/g, ''))
			.then(() => {})
			.catch(() => {});
		setCopyOk(true);
		setTimeout(() => {
			setCopyOk(false);
		}, 1000);
	};

	return (
		<>
			<style>{`pre>code, pre>code>span {background: transparent !important} pre>pre {margin: 0 !important; padding: 0 !important}`}</style>
			<pre className='group relative'>
				<Button
					aria-label='Copy'
					color={copyOk ? 'emerald' : 'blue'}
					variant={copyOk ? 'solid' : 'outline'}
					icon={copyOk ? 'Copy01' : 'Copy02'}
					className='absolute top-0 right-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
					onClick={handleClick}
				/>
				<ReactMarkdown
					components={{
						// pre: CopyButton,

						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						code({ node, className, children, ...rest }) {
							const match = /language-(\w+)/.exec(className || '');
							return match ? (
								// @ts-ignore
								<Prism
									// eslint-disable-next-line react/no-children-prop
									children={String(children).replace(/\n$/, '')}
									// @ts-ignore
									style={isDarkTheme ? oneDark : oneLight}
									customStyle={{
										background: 'transparent',
									}}
									language={match[1]}
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...rest}
								/>
							) : (
								<code className={classNames(className, classes)} {...rest}>
									{/* @ts-ignore */}
									{children}
								</code>
							);
						},
					}}>
					{code ? `\`\`\`${format}\n${code}\n\`\`\`` : content}
				</ReactMarkdown>
			</pre>
		</>
	);
};

export default MdViewer;
