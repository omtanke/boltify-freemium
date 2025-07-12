import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
// eslint-disable-next-line import/extensions
import chartAndGraphLineChartDatepickerExampleSource from '@/examples/dataVisualization/chartsAndGraph/ChartAndGraphLineChartDatepicker.example.tsx?raw';
// eslint-disable-next-line import/extensions
import chartAndGraphBasicRangeAreaChartExampleSource from '@/examples/dataVisualization/chartsAndGraph/ChartAndGraphBasicRangeAreaChart.example.tsx?raw';
// eslint-disable-next-line import/extensions
import chartAndGraphTimelineChartReportExampleSource from '@/examples/dataVisualization/chartsAndGraph/ChartAndGraphTimelineChartReport.example.tsx?raw';
// eslint-disable-next-line import/extensions
import chartAndGraphTimelineExampleSource from '@/examples/dataVisualization/chartsAndGraph/ChartAndGraphTimeline.example.tsx?raw';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';

const ChartsAndGraphExamplePage = () => {
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
									.chartsAndGraph,
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
						title='Charts & Graphs'
						description='Charts and graphs featuring a variety of Apexcharts bars and sorting toptions.'
					/>

					<ExampleItemPartial
						title='Line Chart Datepicker'
						code={extractSnippetUtil(
							chartAndGraphLineChartDatepickerExampleSource,
							'chartAndGraphLineChartDatepickerExampleSource',
						)}>
						<EXAMPLE.DataVisualization.ChartAndGraph.LineChartDatepicker />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Basic Range Area Chart'
						code={extractSnippetUtil(
							chartAndGraphBasicRangeAreaChartExampleSource,
							'chartAndGraphBasicRangeAreaChartExampleSource',
						)}>
						<EXAMPLE.DataVisualization.ChartAndGraph.BasicRangeAreaChart />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Timeline Chart Report'
						code={extractSnippetUtil(
							chartAndGraphTimelineChartReportExampleSource,
							'chartAndGraphTimelineChartReportExampleSource',
						)}>
						<EXAMPLE.DataVisualization.ChartAndGraph.TimelineChartReport />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Timeline Chart'
						code={extractSnippetUtil(
							chartAndGraphTimelineExampleSource,
							'chartAndGraphTimelineExampleSource',
						)}>
						<EXAMPLE.DataVisualization.ChartAndGraph.TimelineChart />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default ChartsAndGraphExamplePage;
