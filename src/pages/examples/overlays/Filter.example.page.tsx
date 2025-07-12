import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';
import filterPaymentModalExampleSource from '@/examples/overlays/filters/FilterPaymentModal.example.tsx?raw'; // eslint-disable-line import/extensions

const FilterExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.overlays },
							{
								...pages.examples.exampleMain.subPages.overlays.subPages.filters,
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
						title='Filters'
						description='Filters Modals provide a clean way to present apzi6 options inside modal windows, helping users refine their selections.'
					/>

					<ExampleItemPartial
						title='Payments'
						code={extractSnippetUtil(
							filterPaymentModalExampleSource,
							'filterPaymentModalExampleSource',
						)}
						iFrameProps={{ initialWidth: 640 }}>
						<EXAMPLE.Overlays.Filters.PaymentModal />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default FilterExamplePage;
