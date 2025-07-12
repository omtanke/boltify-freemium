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
import shareAndInviteInviteUserExampleSource from '@/examples/overlays/shareAndInvite/ShareAndInviteInviteUser.example.tsx?raw'; // eslint-disable-line import/extensions

const ShareAndInviteExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.overlays },
							{
								...pages.examples.exampleMain.subPages.overlays.subPages
									.shareAndInvite,
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
						title='Share & Invite'
						description='Discover modals, displaying collapsible sections for different team roles and permissions, alongside a one-click copy button for invite links.'
					/>

					<ExampleItemPartial
						title='Invite User'
						code={extractSnippetUtil(
							shareAndInviteInviteUserExampleSource,
							'shareAndInviteInviteUserExampleSource',
						)}>
						<div>
							<EXAMPLE.Overlays.ShareAndInvite.InviteUser />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default ShareAndInviteExamplePage;
