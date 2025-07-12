import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import MdViewer from '@/components/utils/MdViewer';
import Card, { CardBody } from '@/components/ui/Card';
import projectStructureMd from '@/pages/documentation/gettingStarted/ProjectStructure/projectStructure.md';

const ProjectStructurePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.gettingStarted },
							{ ...pages.documentation.gettingStarted.subPages.projectStructure },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.gettingStarted.subPages.projectStructure.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.gettingStarted.subPages.projectStructure.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-4'>
					<div className='text-2xl text-zinc-500'>
						The placement of the files in the project is logically arranged as seen
						below, and there are explanations next to the files you need to access
						quickly.
					</div>
					<Card>
						<CardBody>
							<MdViewer mdFile={projectStructureMd} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ProjectStructurePage;
