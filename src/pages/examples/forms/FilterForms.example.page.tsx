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
import filtersPaymentsExampleSource from '@/examples/forms/filters/FiltersPayments.example.tsx?raw'; // eslint-disable-line import/extensions

const FilterFormsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.forms },
							{
								...pages.examples.exampleMain.subPages.forms.subPages.filters,
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
						description='Explore Filter Forms to provide users with structured fields for refining search results or data views effectively.'
					/>

					<ExampleItemPartial
						title='Payments'
						code={extractSnippetUtil(
							filtersPaymentsExampleSource,
							'filtersPaymentsExampleSource',
						)}
						iFrameProps={{ initialWidth: 640 }}>
						<EXAMPLE.Forms.Filters.Payments />
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default FilterFormsExamplePage;
