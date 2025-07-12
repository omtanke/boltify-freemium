import Container from '@/components/layout/Container';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';
import addressAddAndEditExampleSource from '@/examples/card/locationAddress/AddressAddAndEdit.example.tsx?raw'; // eslint-disable-line import/extensions
import extractSnippetUtil from '@/utils/extractSnippet.util';

const LocationAndAddressExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.cards },
							{
								...pages.examples.exampleMain.subPages.cards.subPages
									.locationAndAddress,
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
						title='Location & Address'
						description='Cards containing addresses.'
					/>

					<ExampleItemPartial
						title='Add & Edit Address'
						code={extractSnippetUtil(
							addressAddAndEditExampleSource,
							'addressAddAndEditExampleSource',
						)}>
						<EXAMPLE.Card.LocationAddress.AddAndEdit />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default LocationAndAddressExamplePage;
