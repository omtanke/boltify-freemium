import Container from '@/components/layout/Container';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import UnderConstructionTemplate from '@/templates/container/UnderConstruction.template';

const OtherExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.tables },
							{
								...pages.examples.exampleMain.subPages.tables.subPages.others,
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
						<div className='text-6xl'>Other Tables</div>
						<div className='text max-w-5xl text-center text-2xl text-zinc-500'>
							Manage tables with search inputs, review dropdown select and
							paginations.
						</div>
					</div>
					<div className='col-span-12'>
						<UnderConstructionTemplate />
					</div>
				</div>
			</Container>
		</>
	);
};

export default OtherExamplePage;
