import Container from '@/components/layout/Container';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';
import contactsUserConnectExampleSource from '@/examples/card/contacts/ContactsUserConnect.example.tsx?raw'; // eslint-disable-line import/extensions

const ContactsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.cards },
							{
								...pages.examples.exampleMain.subPages.cards.subPages.contacts,
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
						title='Contacts'
						description='The Contacts section features inquiry forms, company details such as addresses, and other essential contact information.'
					/>

					<ExampleItemPartial
						title='User Connect'
						iFrameProps={{ initialWidth: 480 }}
						code={extractSnippetUtil(
							contactsUserConnectExampleSource,
							'contactsUserConnectExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.Card.Contacts.UserConnect />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default ContactsExamplePage;
