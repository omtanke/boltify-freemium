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
import filesAndFoldersFoldersExampleSource from '@/examples/card/filesAndFolders/FilesAndFoldersFolders.example.tsx?raw'; // eslint-disable-line import/extensions

const FilesAndFoldersExamplePage = () => {
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
									.filesAndFolders,
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
						title='Files & Folders'
						description='Neatly designed files & folders UI built with Tailwind CSS for efficient organization and display.'
					/>

					<ExampleItemPartial
						title='Folders'
						code={extractSnippetUtil(
							filesAndFoldersFoldersExampleSource,
							'filesAndFoldersFoldersExampleSource',
						)}>
						<EXAMPLE.Card.FilesAndFolders.Folders />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default FilesAndFoldersExamplePage;
