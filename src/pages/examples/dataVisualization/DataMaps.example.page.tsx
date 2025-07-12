import Container from '@/components/layout/Container';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import EXAMPLE from '@/examples/_index';
// eslint-disable-next-line import/extensions
import mapWorldExampleSource from '@/examples/dataVisualization/map/MapWorld.example.tsx?raw';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const DataMapsExamplePage = () => {
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
									.dataMaps,
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
						title='Data Maps'
						description='Dive deeper with data maps, customizable tabs and insightful tables, all in one centralized dashboard.'
					/>

					<ExampleItemPartial
						title='World'
						code={extractSnippetUtil(mapWorldExampleSource, 'mapWorldExampleSource')}>
						<EXAMPLE.DataVisualization.Map.World />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default DataMapsExamplePage;
