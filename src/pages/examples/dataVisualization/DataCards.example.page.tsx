import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import dataCardBrowserExampleSource from '@/examples/dataVisualization/dataCard/DataCardBrowser.example.tsx?raw'; // eslint-disable-line import/extensions
import dataCardStatCardsWithProgressExampleSource from '@/examples/dataVisualization/dataCard/DataCardStatCardsWithProgress.example.tsx?raw'; // eslint-disable-line import/extensions
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const DataCardsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.dataVisualization },
							{
								...pages.examples.exampleMain.subPages.dataVisualization.subPages
									.dataCards,
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
						title='Data Cards'
						description='A sleek dashboard with various data cards featuring progress bars, charts, and timesheet summaries.'
					/>

					<ExampleItemPartial
						title='Browser'
						iFrameProps={{ initialWidth: 480 }}
						code={extractSnippetUtil(
							dataCardBrowserExampleSource,
							'dataCardBrowserExampleSource',
						)}>
						<EXAMPLE.DataVisualization.DataCard.Browser />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Stat Cards with Progress'
						iFrameProps={{ initialWidth: 768 }}
						code={extractSnippetUtil(
							dataCardStatCardsWithProgressExampleSource,
							'dataCardStatCardsWithProgressExampleSource',
						)}>
						<EXAMPLE.DataVisualization.DataCard.StatCardsWithProgress />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default DataCardsExamplePage;
