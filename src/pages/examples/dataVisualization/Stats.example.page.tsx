import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
import statSeparateCardsExampleSource from '@/examples/dataVisualization/stats/StatSeparateCards.example.tsx?raw'; // eslint-disable-line import/extensions
import extractSnippetUtil from '@/utils/extractSnippet.util';
import statTradeBadgeExampleSource from '@/examples/dataVisualization/stats/StatTradeBadge.example.tsx?raw'; // eslint-disable-line import/extensions
import statCardsAndActionExampleSource from '@/examples/dataVisualization/stats/StatCardsAndAction.example.tsx?raw'; // eslint-disable-line import/extensions
import statWithIconExampleSource from '@/examples/dataVisualization/stats/StatWithIcon.example.tsx?raw'; // eslint-disable-line import/extensions
import statWithAvatarExampleSource from '@/examples/dataVisualization/stats/StatWithAvatar.example.tsx?raw'; // eslint-disable-line import/extensions
import statWithButtonExampleSource from '@/examples/dataVisualization/stats/StatWithButton.example.tsx?raw'; // eslint-disable-line import/extensions
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const StatsExamplePage = () => {
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
									.stats,
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
						title='Stats'
						description='Stats cards with avatars and badges that provide a clear overview of key metrics.'
					/>

					<ExampleItemPartial
						title='Separate Cards, Badges'
						code={extractSnippetUtil(
							statSeparateCardsExampleSource,
							'statSeparateCardsExampleSource',
						)}>
						<EXAMPLE.DataVisualization.Stat.SeparateCards />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Trade badges'
						code={extractSnippetUtil(
							statTradeBadgeExampleSource,
							'statTradeBadgeExampleSource',
						)}>
						<EXAMPLE.DataVisualization.Stat.TradeBadge />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Cards and Actions'
						code={extractSnippetUtil(
							statCardsAndActionExampleSource,
							'statCardsAndActionExampleSource',
						)}>
						<EXAMPLE.DataVisualization.Stat.CardsAndAction />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Stats with Icon'
						code={extractSnippetUtil(
							statWithIconExampleSource,
							'statWithIconExampleSource',
						)}>
						<EXAMPLE.DataVisualization.Stat.WithIcon />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Stats with Avatar'
						code={extractSnippetUtil(
							statWithAvatarExampleSource,
							'statWithAvatarExampleSource',
						)}>
						<EXAMPLE.DataVisualization.Stat.WithAvatar />
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Stats with Button'
						code={extractSnippetUtil(
							statWithButtonExampleSource,
							'statWithButtonExampleSource',
						)}>
						<EXAMPLE.DataVisualization.Stat.WithButton />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default StatsExamplePage;
