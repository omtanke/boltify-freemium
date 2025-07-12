import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import { toast, ToastContentProps } from 'react-toastify';
import Button from '@/components/ui/Button';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import { Logo } from '@/assets/images';
import MdViewer from '@/components/utils/MdViewer';
import interfaceMd from './_md/interface.md';
import basicUsageMd from './_md/basicUsage.md';
import customUsageMd from './_md/customUsage.md';

const ToastsPage = () => {
	const notify = () =>
		toast('This is a toast notify!', {
			icon: () => <Icon icon='Energy' size='text-2xl' color='blue' />,
		});
	const notify2 = () =>
		toast(
			({ closeToast }: ToastContentProps) => (
				<div className='grid grid-cols-12 overflow-hidden rounded-xl border-zinc-500/25'>
					<div className='col-span-9'>
						<div className='flex items-center justify-center gap-4 p-4'>
							<div className='shrink-0'>
								<img src={Logo} alt='' className='h-9 w-9' />
							</div>
							<div className='grow'>
								<div className='line-clamp-1 font-bold'>
									This is a notification title and is set to a maximum of one
									lines of text.
								</div>
								<div className='line-clamp-1'>
									This is a notification content and is set to a maximum of one
									lines of text.
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-3 border-s border-inherit'>
						<div className='flex h-full w-full flex-col items-center justify-center divide-y divide-zinc-500/25'>
							<div className='flex h-full w-full items-center justify-center'>
								<button
									className='h-full w-full hover:bg-zinc-500/25'
									onClick={() => closeToast('reply')}>
									Reply
								</button>
							</div>
							<div className='flex h-full w-full items-center justify-center'>
								<button
									className='h-full w-full hover:bg-zinc-500/25'
									onClick={() => closeToast('ignore')}>
									Ignore
								</button>
							</div>
						</div>
					</div>
				</div>
			),
			{
				closeButton: false,
				className: 'p-0! bg-zinc-500/10! backdrop-blur-md',
			},
		);
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.toasts },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.toasts.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.toasts.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						The most used{' '}
						<a
							target='_blank'
							href='https://www.npmjs.com/package/react-toastify'
							rel='noreferrer'
							className='text-blue-500 underline decoration-wavy underline-offset-2'>
							react-toastify
						</a>{' '}
						library is preferred for Toast, and its design is compatible with the
						template. It can be fully customized.
					</div>
					<div className='text-3xl font-bold'>Usage</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'BookOpen02',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Basic usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Can be used with State</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<Button
									aria-label='Show Toast'
									variant='outline'
									onClick={notify}
									icon='Rocket'>
									Show Toast
								</Button>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Bookshelf03',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Custom usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Can be used with State</div>
							<PreviewComponent
								mdFile={customUsageMd as RequestInfo}
								inIFrame={false}>
								<Button
									aria-label='Show Toast'
									variant='outline'
									onClick={notify2}
									icon='Rocket'>
									Show Toast
								</Button>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>API</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<MdViewer mdFile={interfaceMd} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ToastsPage;
