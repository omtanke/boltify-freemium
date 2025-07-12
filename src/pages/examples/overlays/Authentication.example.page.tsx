import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import UnderConstructionTemplate from '@/templates/container/UnderConstruction.template';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';

const AuthenticationExamplePage = () => {
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
									.authentication,
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
						title='Authentication'
						description='Implement secure 2FA authentication modals to enhance account security, requiring multiple verification steps for user access.'
					/>

					<div className='col-span-12'>
						<UnderConstructionTemplate />
					</div>
				</div>
			</Container>
		</>
	);
};

export default AuthenticationExamplePage;
