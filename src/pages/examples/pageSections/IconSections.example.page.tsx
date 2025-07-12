import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const IconSectionsExamplePage = () => {
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
									.iconSection,
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
						title='Icon Sections'
						description='Icon Sections showcase a collection of meaningful icons, visually highlighting key features and making content more engaging and easier to understand.'
					/>

					<ExampleItemPartial
						title='Icon Gray Background on Hover'
						code='Accessible only to licensed users.'>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.IconSections.IconGrayBackgroundOnHover />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default IconSectionsExamplePage;
