import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import billingAndPaymentAddPaymentExampleSource from '@/examples/overlays/billingAndPayments/BillingAndPaymentAddPayment.example.tsx?raw'; // eslint-disable-line import/extensions
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const BillingAndPaymentsFormsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.forms },
							{
								...pages.examples.exampleMain.subPages.forms.subPages
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
						description='Explore Billing & Payment forms from wide range of admin billing, upgrade form, dashboard payments and card management.'
					/>

					<ExampleItemPartial
						title='Add Payment'
						iFrameProps={{ initialWidth: 640 }}
						code={extractSnippetUtil(
							billingAndPaymentAddPaymentExampleSource,
							'billingAndPaymentAddPaymentExampleSource',
						)}>
						<div>
							<EXAMPLE.Forms.BillingAndPayments.AddPayment />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default BillingAndPaymentsFormsExamplePage;
