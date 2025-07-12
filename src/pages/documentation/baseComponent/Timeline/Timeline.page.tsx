import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Timeline, { TimelineHeader, TimelineItem } from '@/components/ui/Timeline';
import MdViewer from '@/components/utils/MdViewer';
import Avatar from '@/components/ui/Avatar';
import { Avatar1, Avatar4 } from '@/assets/images';
import basicUsageMd from './_md/basicUsage.md';
import withTimeMd from './_md/withTime.md';
import timelineSource from '@/components/ui/Timeline.tsx?raw'; // eslint-disable-line import/extensions
import extractSnippetUtil from '@/utils/extractSnippet.util';

const TimelinePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.timeline },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.timeline.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.timeline.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						The Timeline Component is designed to display events in chronological order,
						ideal for showcasing history, project milestones, or event sequences.
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
							<div className='text-zinc-500'>
								A basic timeline usage with title, description and users.
							</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<Timeline>
									<TimelineHeader>4 Aug, 2024</TimelineHeader>
									<TimelineItem
										header={
											<div className='flex items-center gap-2'>
												<Icon icon='File01' />
												<span>Crete New Task</span>
											</div>
										}
										footer={
											<div className='mt-1 flex items-center gap-2 text-zinc-500'>
												<Avatar src={Avatar1} size='w-6' />
												John Doe
											</div>
										}>
										Find more detailed instructions here.
									</TimelineItem>
									<TimelineItem
										header={
											<div className='flex items-center gap-2'>
												<span>Release v2.0.0 quick bug fix</span>
												<Icon icon='Bug02' />
											</div>
										}
										footer={
											<div className='mt-1 flex items-center gap-2 text-zinc-500'>
												<Avatar src={Avatar4} size='w-6' color='amber' />
												Alex Brown
											</div>
										}
									/>
									<TimelineItem
										header='Landing page added'
										footer={
											<div className='mt-1 flex items-center gap-2 text-zinc-500'>
												<Avatar
													name='Jonas Lines'
													size='w-6'
													color='emerald'
												/>
												Jonas Lines
											</div>
										}>
										Find more detailed instructions here.
									</TimelineItem>
									<TimelineHeader>1 Aug, 2024</TimelineHeader>
									<TimelineItem header='New Project Start'>
										Finally! You can check it out here.
									</TimelineItem>
								</Timeline>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Clock01',
										color: 'amber',
										size: 'text-3xl',
									}}>
									With time
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>With time on the left content.</div>
							<PreviewComponent mdFile={withTimeMd as RequestInfo} inIFrame={false}>
								<Timeline>
									<TimelineItem
										header={
											<div className='flex items-center gap-2'>
												<Icon icon='File01' />
												<span>Crete New Task</span>
											</div>
										}
										footer={
											<div className='mt-1 flex items-center gap-2 text-zinc-500'>
												<Avatar src={Avatar1} size='w-6' />
												John Doe
											</div>
										}
										leftContent='14:23'>
										Find more detailed instructions here.
									</TimelineItem>
									<TimelineItem
										header={
											<div className='flex items-center gap-2'>
												<span>Release v2.0.0 quick bug fix</span>
												<Icon icon='Bug02' />
											</div>
										}
										footer={
											<div className='mt-1 flex items-center gap-2 text-zinc-500'>
												<Avatar src={Avatar4} size='w-6' color='amber' />
												Alex Brown
											</div>
										}
										leftContent='12:08'
									/>
									<TimelineItem
										header='Landing page added'
										footer={
											<div className='mt-1 flex items-center gap-2 text-zinc-500'>
												<Avatar
													name='Jonas Lines'
													size='w-6'
													color='emerald'
												/>
												Jonas Lines
											</div>
										}
										leftContent='10:53'>
										Find more detailed instructions here.
									</TimelineItem>
									<TimelineItem header='New Project Start' leftContent='09:48'>
										Finally! You can check it out here.
									</TimelineItem>
								</Timeline>
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
							<MdViewer code={extractSnippetUtil(timelineSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default TimelinePage;
