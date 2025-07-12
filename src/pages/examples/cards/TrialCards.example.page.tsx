import Container from '@/components/layout/Container';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import trialCardAlertExampleSource from '@/examples/card/trialCards/TrialCardAlert.example.tsx?raw'; // eslint-disable-line import/extensions
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const TrialCardsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.cards },
							{
								...pages.examples.exampleMain.subPages.cards.subPages.trialCards,
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
						title='Trial Cards'
						description='Cards with information for trial versions.'
					/>

					<ExampleItemPartial
						title='Alert'
						iFrameProps={{ initialWidth: 480 }}
						code={extractSnippetUtil(
							trialCardAlertExampleSource,
							'trialCardAlertExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.Card.TrialCards.Alert />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default TrialCardsExamplePage;
