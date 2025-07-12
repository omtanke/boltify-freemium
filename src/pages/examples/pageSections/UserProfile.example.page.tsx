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
import userProfileHeaderWithTabsExampleSource from '@/examples/pageSections/userProfile/UserProfileHeaderWithTabs.example.tsx?raw'; // eslint-disable-line import/extensions

const UserProfileExamplePage = () => {
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
									.userProfile,
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
						title='User Profile'
						description='Admin user profile navigation, powered by informative modals, avatars come alive with active status indicators.'
					/>

					<ExampleItemPartial
						title='Header With Tabs'
						code={extractSnippetUtil(
							userProfileHeaderWithTabsExampleSource,
							'userProfileHeaderWithTabsExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.UserProfile.HeaderWithTabs />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default UserProfileExamplePage;
