import { FC, ReactNode, useState } from 'react';
import Card, { CardBody } from '@/components/ui/Card';
import MdViewer from './MdViewer';
import Button from '@/components/ui/Button';
import IFrame, { IIFrameProps } from '@/components/utils/IFrame';

interface IPreviewComponentProps {
	children: ReactNode;
	mdFile?: RequestInfo | URL;
	code?: string;
	format?: string;
	iFrameProps?: Partial<IIFrameProps>;
	inIFrame?: boolean;
}
const PreviewComponent: FC<IPreviewComponentProps> = (props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { children, mdFile, code, format, iFrameProps, inIFrame = true } = props;
	return (
		<>
			<div className='mt-6 mb-4 flex'>
				<div className='flex rounded-2xl bg-zinc-100 p-2 dark:bg-zinc-800'>
					<Button
						aria-label='Preview'
						dimension='sm'
						onClick={() => setIsOpen(!isOpen)}
						variant={!isOpen ? 'solid' : 'default'}>
						Preview
					</Button>
					<Button
						aria-label='Code'
						dimension='sm'
						onClick={() => setIsOpen(!isOpen)}
						variant={isOpen ? 'solid' : 'default'}>
						Code
					</Button>
				</div>
			</div>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			{!isOpen && inIFrame && <IFrame {...iFrameProps}>{children}</IFrame>}
			{!isOpen && !inIFrame && (
				<div className='overflow-x-auto rounded-xl border-2 border-dashed border-zinc-500/25 p-[16px]'>
					{children}
				</div>
			)}
			{isOpen && (
				<Card className='border-2 border-dashed'>
					<CardBody>
						<MdViewer mdFile={mdFile} code={code} format={format} />
					</CardBody>
				</Card>
			)}
		</>
	);
};

export default PreviewComponent;
