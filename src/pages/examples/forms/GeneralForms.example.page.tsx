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
import generalInlineRemovableInputsExampleSource from '@/examples/forms/general/GeneralInlineRemovableInputs.example.tsx?raw'; // eslint-disable-line import/extensions

const GeneralFormsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.forms },
							{
								...pages.examples.exampleMain.subPages.forms.subPages.general,
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
						title='General'
						description='Streamline your workflows with advanced admin forms like features removable inputs, add more input field, radio button and more.'
					/>

					<ExampleItemPartial
						title='Simple Drag & Drop'
						code={extractSnippetUtil(
							generalInlineRemovableInputsExampleSource,
							'generalInlineRemovableInputsExampleSource',
						)}
						iFrameProps={{ initialWidth: 960 }}>
						<EXAMPLE.Forms.General.InlineRemovableInputs />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default GeneralFormsExamplePage;
