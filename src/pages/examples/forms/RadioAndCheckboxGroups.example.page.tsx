import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import UnderConstructionTemplate from '@/templates/container/UnderConstruction.template';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';

const RadioAndCheckboxGroupsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.forms },
							{
								...pages.examples.exampleMain.subPages.forms.subPages
									.radioAndCheckboxGroups,
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
					<ExampleHeaderPartial
						title='Radio & Checkbox Groups'
						description='Flexible admin radio buttons, checkboxes in listing, and more directories.'
					/>

					<div className='col-span-12'>
						<UnderConstructionTemplate />
					</div>
				</div>
			</Container>
		</>
	);
};

export default RadioAndCheckboxGroupsExamplePage;
