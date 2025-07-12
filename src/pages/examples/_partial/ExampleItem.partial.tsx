import { FC, ReactNode } from 'react';
import PreviewComponent from '@/components/utils/PreviewComponent';
import { IIFrameProps } from '@/components/utils/IFrame';

interface IExampleItemPartialProps {
	title: string;
	children?: ReactNode;
	code: string;
	iFrameProps?: Partial<IIFrameProps>;
}

const ExampleItemPartial: FC<IExampleItemPartialProps> = (props) => {
	const { title, children, code, iFrameProps } = props;
	return (
		<>
			<div className='col-span-12 mt-12 text-2xl font-bold'>{title}</div>
			<div className='col-span-12 mb-16'>
				<PreviewComponent iFrameProps={iFrameProps} code={code}>
					{children}
				</PreviewComponent>
			</div>
		</>
	);
};

export default ExampleItemPartial;
