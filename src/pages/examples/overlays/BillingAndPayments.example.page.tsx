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
import billingAndPaymentAddPaymentExampleSource from '@/examples/overlays/billingAndPayments/BillingAndPaymentAddPayment.example.tsx?raw'; // eslint-disable-line import/extensions

const BillingAndPaymentsExamplePage = () => {
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
									.billingAndPayments,
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
						title='Billing & Payments'
						description='Checkboxes, selects, tabs, and more in Billing & Payments modals to create feature-rich transaction forms.'
					/>

					<ExampleItemPartial
						title='Add Payment'
						code={extractSnippetUtil(
							billingAndPaymentAddPaymentExampleSource,
							'billingAndPaymentAddPaymentExampleSource',
						)}>
						<div>
							<EXAMPLE.Overlays.BillsAndPayments.AddPayment />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default BillingAndPaymentsExamplePage;
