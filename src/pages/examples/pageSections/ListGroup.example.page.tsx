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
import listGroupLogoWithButtonExampleSource from '@/examples/pageSections/listGroup/ListGroupLogoWithButton.example.tsx?raw'; // eslint-disable-line import/extensions
import listGroupAvatarWithButtonExampleSource from '@/examples/pageSections/listGroup/ListGroupAvatarWithButton.example.tsx?raw'; // eslint-disable-line import/extensions

const ListGroupExamplePage = () => {
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
									.listGroup,
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
						title='List Group'
						description='Discover admin list group options with user-friendly tabs, colorful icons, and friendly avatars.'
					/>

					<ExampleItemPartial
						title='Logo with Button'
						iFrameProps={{ initialWidth: 480 }}
						code={extractSnippetUtil(
							listGroupLogoWithButtonExampleSource,
							'listGroupLogoWithButtonExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.ListGroup.LogoWithButton />
						</div>
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Avatar with Button'
						iFrameProps={{ initialWidth: 480 }}
						code={extractSnippetUtil(
							listGroupAvatarWithButtonExampleSource,
							'listGroupAvatarWithButtonExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.ListGroup.AvatarWithButton />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default ListGroupExamplePage;
