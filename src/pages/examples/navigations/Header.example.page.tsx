import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const HeaderExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.navigations },
							{
								...pages.examples.exampleMain.subPages.navigations.subPages.header,
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
						title='Header'
						description='Navbars (Headers) serve as the central hub for site navigation, seamlessly guiding users to key sections while reinforcing brand identity and ensuring a consistent, accessible experience across all pages.'
					/>

					<ExampleItemPartial
						title='Mini Floating Header'
						code='Accessible only to licensed users.'>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.Navigations.Navbars.MiniFloatingHeader />
						</div>
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Center aligned'
						code='Accessible only to licensed users.'>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.Navigations.Navbars.CenterAligned />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default HeaderExamplePage;
