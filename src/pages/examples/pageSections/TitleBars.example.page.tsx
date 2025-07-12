import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';
import titleBarsProjectAndUsersExampleSource from '@/examples/pageSections/titleBars/TitleBarsProjectAndUsers.example.tsx?raw'; // eslint-disable-line import/extensions
import titleBarsTagsAndButtonsExampleSource from '@/examples/pageSections/titleBars/TitleBarsTagsAndButtons.example.tsx?raw'; // eslint-disable-line import/extensions
import titleBarsBadgeAndButtonsExampleSource from '@/examples/pageSections/titleBars/TitleBarsBadgeAndButtons.example.tsx?raw'; // eslint-disable-line import/extensions

const TitleBarsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.pageSections },
							{
								...pages.examples.exampleMain.subPages.pageSections.subPages
									.titleBars,
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
						title='Title Bars'
						description='Discover a collection of customizable Title Bars, perfect for enhancing user navigation and interface design.'
					/>

					<ExampleItemPartial
						title='Project & Users'
						code={extractSnippetUtil(
							titleBarsProjectAndUsersExampleSource,
							'titleBarsProjectAndUsersExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.TitleBars.ProjectAndUsers />
						</div>
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Project & Users'
						code={extractSnippetUtil(
							titleBarsTagsAndButtonsExampleSource,
							'titleBarsTagsAndButtonsExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.TitleBars.TagsAndButtons />
						</div>
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Badge & Buttons'
						code={extractSnippetUtil(
							titleBarsBadgeAndButtonsExampleSource,
							'titleBarsBadgeAndButtonsExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.TitleBars.BadgeAndButtons />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default TitleBarsExamplePage;
