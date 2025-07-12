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
import generalOrderActivityExampleSource from '@/examples/overlays/general/GeneralOrderActivity.example.tsx?raw'; // eslint-disable-line import/extensions

const GeneralExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.overlays },
							{
								...pages.examples.exampleMain.subPages.overlays.subPages.general,
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
						title='General'
						description='Make every action effortless with admin modal forms, invoices, and keyboard shortcuts.'
					/>

					<ExampleItemPartial
						title='Order Activity'
						code={extractSnippetUtil(
							generalOrderActivityExampleSource,
							'generalOrderActivityExampleSource',
						)}>
						<div>
							<EXAMPLE.Overlays.General.OrderActivity />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default GeneralExamplePage;
