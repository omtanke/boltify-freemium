import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import Container from '@/components/layout/Container';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const HeroSectionsExamplePage = () => {
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
									.heroSections,
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
						title='Hero Sections'
						description='Hero sections instantly captivate visitors with bold visuals and compelling messages, making a powerful first impression and setting the tone for your entire site.'
					/>

					<ExampleItemPartial
						title='With Image and Text'
						code='Accessible only to licensed users.'>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.HeroSections.WithImageAndText />
						</div>
					</ExampleItemPartial>

					<ExampleItemPartial
						title='Text and Button'
						code='Accessible only to licensed users.'>
						<div className='flex flex-col gap-4'>
							<EXAMPLE.PageSections.HeroSections.TextAndButton />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default HeroSectionsExamplePage;
