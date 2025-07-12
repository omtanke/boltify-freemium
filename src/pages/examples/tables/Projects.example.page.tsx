import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';

const ProjectsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.tables },
							{
								...pages.examples.exampleMain.subPages.tables.subPages.projects,
							},
						]}
					/>
				</HeaderLeft>
				<HeaderRight>
					<ChangeDarkModeTemplate />
					<ChangeLanguageTemplate />
					<EXAMPLE.Ui.Dropdown.Notifications />
				</HeaderRight>
			</Header>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12 flex flex-col items-center justify-center gap-8 py-32'>
						<div className='text-6xl'>Projects Tables</div>
						<div className='text max-w-5xl text-center text-2xl text-zinc-500'>
							Transform your tables into a command center! Searchable filters, vibrant
							badges, avatars and eye-catching progress bars unlock instant insights.
						</div>
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>
						Table with Searchable Filter Bar
					</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Table.Projects.SearchableFilter />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Image & Components</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Table.Projects.ImageAndComponents />
					</div>
				</div>
			</Container>
		</>
	);
};

export default ProjectsExamplePage;
