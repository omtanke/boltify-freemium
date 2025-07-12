import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
import interactiveDataCardTrafficExampleSource from '@/examples/dataVisualization/interactiveDataCards/InteractiveDataCardTraffic.example.tsx?raw'; // eslint-disable-line import/extensions
import interactiveDataCardLineChartWithDatepickerExampleSource from '@/examples/dataVisualization/interactiveDataCards/InteractiveDataCardLineChartWithDatepicker.example.tsx?raw'; // eslint-disable-line import/extensions
import interactiveDataCardStatsWithLineChartExampleSource from '@/examples/dataVisualization/interactiveDataCards/InteractiveDataCardStatsWithLineChart.example.tsx?raw'; // eslint-disable-line import/extensions
import extractSnippetUtil from '@/utils/extractSnippet.util';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const InteractiveDataCardsExamplePage = () => {
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
									.interactiveDataCards,
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
						title='Interactive Data Cards'
						description='A collection of different chart types (bar charts, pie charts, area charts, etc.) arranged a dashboard with interactive dropdowns and date pickers.'
					/>

					<ExampleItemPartial
						title='Traffic'
						iFrameProps={{ initialWidth: 400 }}
						code={extractSnippetUtil(
							interactiveDataCardTrafficExampleSource,
							'interactiveDataCardTrafficExampleSource',
						)}>
						<EXAMPLE.DataVisualization.InteractiveDataCards.Traffic />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Line Chart with Datepicker'
						iFrameProps={{ initialWidth: 600 }}
						code={extractSnippetUtil(
							interactiveDataCardLineChartWithDatepickerExampleSource,
							'interactiveDataCardLineChartWithDatepickerExampleSource',
						)}>
						<EXAMPLE.DataVisualization.InteractiveDataCards.LineChartWithDatepicker />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Stats with Line Chart'
						iFrameProps={{ initialWidth: 960 }}
						code={extractSnippetUtil(
							interactiveDataCardStatsWithLineChartExampleSource,
							'interactiveDataCardStatsWithLineChartExampleSource',
						)}>
						<EXAMPLE.DataVisualization.InteractiveDataCards.StatsWithLineChart />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default InteractiveDataCardsExamplePage;
