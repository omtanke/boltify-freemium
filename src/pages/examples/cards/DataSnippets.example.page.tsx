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
import dataSnippetsUserListExampleSource from '@/examples/card/dataSnippets/DataSnippetsUserList.example.tsx?raw'; // eslint-disable-line import/extensions

const DataSnippetsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.cards },
							{
								...pages.examples.exampleMain.subPages.cards.subPages.dataSnippets,
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
						title='Data Snippets'
						description='Data Snippets offer concise data points for quick reference and easy analysis, helping users gain insights efficiently.'
					/>

					<ExampleItemPartial
						title='User List'
						code={extractSnippetUtil(
							dataSnippetsUserListExampleSource,
							'dataSnippetsUserListExampleSource',
						)}
						iFrameProps={{ initialWidth: 480 }}>
						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8'>
							<EXAMPLE.Card.DataSnippets.UserList />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default DataSnippetsExamplePage;
