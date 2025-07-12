import Container from '@/components/layout/Container';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';
import importAndExportImportContactsExampleSource from '@/examples/card/importAndExport/ImportAndExportImportContacts.example.tsx?raw'; // eslint-disable-line import/extensions

const ImportAndExportDataExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.cards },
							{
								...pages.examples.exampleMain.subPages.cards.subPages
									.importAndExportData,
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
						title='Import & Export Data'
						description='Import & Export data effortlessly with card list groups, revealing dropdown menus, and seamless upload forms.'
					/>

					<ExampleItemPartial
						title='Import Contacts'
						code={extractSnippetUtil(
							importAndExportImportContactsExampleSource,
							'importAndExportImportContactsExampleSource',
						)}
						iFrameProps={{ initialWidth: 480 }}>
						<EXAMPLE.Card.ImportAndExport.ImportContacts />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default ImportAndExportDataExamplePage;
