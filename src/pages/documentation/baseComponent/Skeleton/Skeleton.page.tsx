import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Skeleton from '@/components/ui/Skeleton';
import MdViewer from '@/components/utils/MdViewer';
import basicUsageMd from './_md/basicUsage.md';
import complexUsageMd from './_md/complexUsage.md';
import skeletonSource from '@/components/ui/Skeleton.tsx?raw'; // eslint-disable-line import/extensions
import extractSnippetUtil from '@/utils/extractSnippet.util';

const SkeletonPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.skeleton },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.skeleton.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.skeleton.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						The skeleton can be used to enhance the experience of your app. It can
						customize its dimensions using tailwind's{' '}
						<a
							href='https://v3.tailwindcss.com/docs/height'
							target='_blank'
							className='underline'
							rel='noreferrer'>
							height
						</a>{' '}
						and{' '}
						<a
							href='https://v3.tailwindcss.com/docs/width'
							target='_blank'
							className='underline'
							rel='noreferrer'>
							width
						</a>{' '}
						classes.
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
							<div className='text-zinc-500'>Simplest Skeleton usage.</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-2'>
									<Skeleton className='mb-2 w-1/3' />
									<Skeleton className='w-2/3' />
									<Skeleton className='w-2/3' />
									<Skeleton className='w-2/3' />
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Library',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Complex usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Complex combination with avatar and multiple paragraphs.
							</div>
							<PreviewComponent
								mdFile={complexUsageMd as RequestInfo}
								inIFrame={false}>
								<div className='flex gap-4'>
									<div className='shrink-0'>
										<Skeleton className='h-16 w-16' rounded='rounded-full' />
									</div>
									<div className='grow'>
										<div className='flex flex-wrap gap-2'>
											<Skeleton
												className='mb-2 w-1/3'
												rounded='rounded-full'
											/>
											<Skeleton className='w-2/3' rounded='rounded-full' />
											<Skeleton className='w-2/3' rounded='rounded-full' />
											<Skeleton className='w-2/3' rounded='rounded-full' />
										</div>
									</div>
								</div>
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
							<MdViewer code={extractSnippetUtil(skeletonSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default SkeletonPage;
