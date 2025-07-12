import Container from '@/components/layout/Container';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import systemLogSessionExampleSource from '@/examples/card/systemLogs/SystemLogSession.example.tsx?raw'; // eslint-disable-line import/extensions
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const SystemLogsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.cards },
							{
								...pages.examples.exampleMain.subPages.cards.subPages.systemLogs,
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
						title='System Logs'
						description='Admin system logs with organized card blocks, clear badge alerts, and instant troubleshooting button links.'
					/>

					<ExampleItemPartial
						title='Session'
						code={extractSnippetUtil(
							systemLogSessionExampleSource,
							'systemLogSessionExampleSource',
						)}
						iFrameProps={{ initialWidth: 480 }}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.Card.SystemLogs.Session />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default SystemLogsExamplePage;
