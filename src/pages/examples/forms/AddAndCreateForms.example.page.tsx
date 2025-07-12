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
import addCreateNewUserExampleSource from '@/examples/forms/addCreate/AddCreateNewUser.example.tsx?raw'; // eslint-disable-line import/extensions

const AddAndCreateFormsExamplePage = () => {
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
						description='Visually captivating experiences with admin forms, WYSIWYG editor, date picker, create content and more.'
					/>

					<ExampleItemPartial
						title='New User'
						code={extractSnippetUtil(
							addCreateNewUserExampleSource,
							'addCreateNewUserExampleSource',
						)}
						iFrameProps={{ initialWidth: 640 }}>
						<EXAMPLE.Forms.AddCreate.NewUser />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default AddAndCreateFormsExamplePage;
