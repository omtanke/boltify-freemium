import pages from '@/Routes/pages';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import SearchAndCommandPalettesPageContent from '@/pages/examples/searchAndCommand/SearchAndCommandPalettes.pageContent';

const SearchAndCommandPalettesPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.searchAndCommandPalettes },
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
						<div className='text-6xl'>
							{pages.examples.exampleMain.subPages.searchAndCommandPalettes.text}
						</div>
					</div>

					<SearchAndCommandPalettesPageContent />
				</div>
			</Container>
		</>
	);
};

export default SearchAndCommandPalettesPage;
