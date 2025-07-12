import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';
import addCreateNewUserModalExampleSource from '@/examples/overlays/addCreate/AddCreateNewUserModal.example.tsx?raw'; // eslint-disable-line import/extensions

const AddCreateFormsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.overlays },
							{
								...pages.examples.exampleMain.subPages.overlays.subPages
									.addAndCreateForms,
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
						title='Add/Create Forms'
						description='Simplified data inputs with date pickers, upload forms to create admin Add/Create Form Modals.'
					/>

					<ExampleItemPartial
						title='New User'
						code={extractSnippetUtil(
							addCreateNewUserModalExampleSource,
							'addCreateNewUserModalExampleSource',
						)}
						iFrameProps={{ initialWidth: 640 }}>
						<EXAMPLE.Overlays.AddCreate.NewUserModal />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default AddCreateFormsExamplePage;
