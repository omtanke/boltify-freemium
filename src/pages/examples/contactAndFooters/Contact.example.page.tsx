import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const ContactExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.contactAndFooters },
							{
								...pages.examples.exampleMain.subPages.contactAndFooters.subPages
									.contact,
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
						title='Contact'
						description='The Contacts section offers convenient ways to get in touch, featuring inquiry forms, detailed company information, and essential contact details for seamless communication.'
					/>

					<ExampleItemPartial
						title='Info with Form'
						code='Accessible only to licensed users.'>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.ContactAndFooter.Contact.InfoWithForm />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default ContactExamplePage;
