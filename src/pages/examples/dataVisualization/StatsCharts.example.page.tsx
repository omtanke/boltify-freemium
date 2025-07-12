import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';
import statChartsWithLineExampleSource from '@/examples/dataVisualization/statsCharts/StatChartsWithLine.example.tsx?raw'; // eslint-disable-line import/extensions

const StatsChartsExamplePage = () => {
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
									.statsCharts,
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
						title='Stats Charts'
						description='The Card Stats component leverages interactive charts and dynamic data visualizations to deliver a clear, component-based summary of key metrics in real time.'
					/>

					<ExampleItemPartial
						title='With Line'
						code={extractSnippetUtil(
							statChartsWithLineExampleSource,
							'statChartsWithLineExampleSource',
						)}>
						<EXAMPLE.DataVisualization.StatCharts.WithLine />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default StatsChartsExamplePage;
