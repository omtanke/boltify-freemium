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
import formsFileUploadExampleSource from '@/examples/forms/fileUploads/FileUploadSimpleDragDrop.example.tsx?raw'; // eslint-disable-line import/extensions

const FileUploadsFormsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.forms },
							{
								...pages.examples.exampleMain.subPages.forms.subPages.fileUploads,
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
						title='File Uploads'
						description='Admin file upload forms with removable image media.'
					/>

					<ExampleItemPartial
						title='Simple Drag & Drop'
						code={extractSnippetUtil(
							formsFileUploadExampleSource,
							'formsFileUploadExampleSource',
						)}
						iFrameProps={{ initialWidth: 640 }}>
						<EXAMPLE.Forms.FileUploads.SimpleDragDrop />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default FileUploadsFormsExamplePage;
