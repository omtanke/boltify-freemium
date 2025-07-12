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
import descriptionListSimpleWithIconExampleSource from '@/examples/pageSections/descriptionList/DescriptionListSimpleWithIcon.example.tsx?raw'; // eslint-disable-line import/extensions

const DescriptionListExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.pageSections },
							{
								...pages.examples.exampleMain.subPages.pageSections.subPages
									.descriptionList,
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
						title='Description List'
						description='Explore detailed and clear admin user description lists with vibrant icons, avatars, badges and links.'
					/>

					<ExampleItemPartial
						title='Simple with Icon'
						iFrameProps={{ initialWidth: 480 }}
						code={extractSnippetUtil(
							descriptionListSimpleWithIconExampleSource,
							'descriptionListSimpleWithIconExampleSource',
						)}>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.DescriptionList.SimpleWithIcon />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default DescriptionListExamplePage;
