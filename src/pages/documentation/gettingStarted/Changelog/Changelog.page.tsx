import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Timeline, { TimelineHeader, TimelineItem } from '@/components/ui/Timeline';

const ChangelogPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.gettingStarted },
							{ ...pages.documentation.gettingStarted.subPages.changelog },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.gettingStarted.subPages.changelog.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.gettingStarted.subPages.changelog.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-4'>
					<div className='text-2xl text-zinc-500'>
						See what's new added, changed, fixed, improved or updated.
					</div>
					<Timeline>
						<TimelineHeader>1 May, 2025</TimelineHeader>
						<TimelineItem
							header={
								<div className='flex items-center gap-2'>
									<Icon icon='File01' />
									<span>Initial release</span>
								</div>
							}
							footer={
								<div className='mt-1 flex items-center gap-2 text-zinc-500'>
									V1.0.0
								</div>
							}>
							Boltify includes an Admin panel and Landing Page templates built using
							React 19, Vite 6, and Tailwind 4.
						</TimelineItem>
					</Timeline>
				</div>
			</Container>
		</>
	);
};

export default ChangelogPage;
