import { FC, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import useDomRect from '@/hooks/useDomRect';
import useDarkMode from '@/hooks/useDarkMode';
import { Resizable, ResizableProps } from 're-resizable';
import Icon from '@/components/icon/Icon';
import indexCssUrl from '/src/index.css?url';
import useFontSize from '@/hooks/useFontSize';

export interface IIFrameProps extends ResizableProps {
	children: ReactNode;
	initialWidth?: number;
	minWidth?: number;
	maxWidth?: number;
	height?: number | string;
}

const IFrame: FC<IIFrameProps> = (props) => {
	const { children, initialWidth, minWidth = 300, height = 'auto', ...rest } = props;
	const divRef = useRef<HTMLDivElement>(null);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [domRect] = useDomRect(divRef as RefObject<HTMLElement>);

	const { fontSize } = useFontSize();

	const [iframeContent, setIframeContent] = useState('');

	const { isDarkTheme } = useDarkMode();

	useEffect(() => {
		if (!iframeRef.current) return;

		const iframe = iframeRef.current;

		const iframeHtml = `
      <!DOCTYPE html>
      <html ${isDarkTheme ? 'class="dark"' : ''}>
        <head>
          <link rel="stylesheet" href="${indexCssUrl}" />
          <style>
           :root {font-size:  ${`${fontSize || 16}px`};}
          </style>
        </head>
        <body class='bg-white dark:bg-zinc-950 overflow-scroll'>
          <div id="root"></div>
          <div id="portal-root"></div>
        </body>
      </html>
    `;

		setIframeContent(iframeHtml);

		const onLoad = () => {
			// // Override document.getElementById for 'portal-root' to redirect to iframe DOM
			// const originalGetElementById = document.getElementById;
			// document.getElementById = function (id: string) {
			// 	if (id === 'portal-root') {
			// 		const target = iframe.contentDocument?.getElementById(id);
			// 		if (target) return target;
			// 	}
			// 	return originalGetElementById.call(document, id);
			// };

			const mountNode = iframe.contentDocument?.getElementById('root');
			if (mountNode) {
				const root = createRoot(mountNode);
				root.render(<>{children}</>);
			}
		};

		iframe.addEventListener('load', onLoad);

		return () => {
			iframe.removeEventListener('load', onLoad);
		};
	}, [children, fontSize, isDarkTheme]);

	useEffect(() => {
		if (!iframeRef.current) return;

		const iframe = iframeRef.current;
		const parentElement = iframe.parentElement;
		if (!parentElement) return;

		const updateHeight = () => {
			try {
				if (!iframe.contentDocument) return;
				const body = iframe.contentDocument.body;
				const html = iframe.contentDocument.documentElement;
				if (body && html) {
					const newHeight = Math.max(body.scrollHeight, html.scrollHeight);
					iframe.style.height = `${newHeight}px`;
				}
			} catch (e) {
				console.log(e);
			}
		};

		let lastParentWidth = parentElement.clientWidth;

		const resizeObserver = new ResizeObserver(() => {
			const currentWidth = parentElement.clientWidth;
			if (currentWidth !== lastParentWidth) {
				lastParentWidth = currentWidth;
				updateHeight();
			}
		});

		iframe.style.height = '0px'; // reset height to recalc
		resizeObserver.observe(parentElement);

		// Also update height when iframe content loads
		iframe.addEventListener('load', () => setTimeout(updateHeight, 100));

		// Initial height update
		setTimeout(updateHeight, 100);

		return () => {
			resizeObserver.disconnect();
			iframe.removeEventListener('load', () => setTimeout(updateHeight, 100));
		};
	}, [iframeContent]);

	const handleResize = () => {
		if (!iframeRef.current) return;
		try {
			const iframe = iframeRef.current;
			if (!iframe.contentDocument) return;
			const body = iframe.contentDocument.body;
			if (body) {
				// Temporarily set to 'auto' to shrink if necessary
				iframe.style.height = 'auto';
				const newHeight = body.scrollHeight;
				iframe.style.height = `${newHeight}px`;
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div
			ref={divRef}
			className='overflow-hidden rounded-xl border-2 border-dashed border-zinc-500/25 p-[16px]'>
			<Resizable
				bounds='window'
				defaultSize={{
					width: initialWidth || domRect?.width,
					height,
				}}
				minWidth={minWidth}
				maxWidth={props.maxWidth ?? (domRect?.width || 1200) - 48}
				enable={{
					right: true,
				}}
				handleComponent={{
					right: (
						<div className='-my-[15px] ms-[16px] flex h-[calc(100%+30px)] w-[16px] items-center justify-center rounded-e-3xl bg-zinc-300 transition-all duration-300 ease-in-out hover:bg-zinc-300/75 dark:bg-zinc-700 dark:hover:bg-zinc-700/75'>
							<span className='rotate-90'>
								<Icon icon='EqualSign' />
							</span>
						</div>
					),
				}}
				style={{
					position: 'relative',
					height: '100%',
				}}
				onResize={handleResize}
				{...rest}>
				<iframe
					title='IFrame'
					ref={iframeRef}
					className='relative w-full border-none'
					srcDoc={iframeContent}
					sandbox='allow-same-origin allow-scripts'
				/>
			</Resizable>
		</div>
	);
};

export default IFrame;
