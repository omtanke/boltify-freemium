import Container from '@/components/layout/Container';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import pages from '@/Routes/pages';
import EXAMPLE from '@/examples/_index';
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import DataVisualizationPageContent from '@/pages/examples/dataVisualization/DataVisualization.pageContent';
import CardsPageContent from '@/pages/examples/cards/Cards.pageContent';
import OverlaysPageContent from '@/pages/examples/overlays/Overlays.pageContent';
import TablesPageContent from '@/pages/examples/tables/Tables.pageContent';
import FormsPageContent from '@/pages/examples/forms/Forms.pageContent';
import SearchAndCommandPalettesPageContent from '@/pages/examples/searchAndCommand/SearchAndCommandPalettes.pageContent';
import PageSectionsPageContent from '@/pages/examples/pageSections/PageSections.pageContent';
import UserInterfacePageContent from '@/pages/examples/userInterface/UserInterface.pageContent';
import NavigationsPageContent from '@/pages/examples/navigations/Navigations.pageContent';
import ContactAndFooterPageContent from '@/pages/examples/contactAndFooters/ContactAndFooter.pageContent';

const exampleContents = [
	<DataVisualizationPageContent key='data' />,
	<CardsPageContent key='cards' />,
	<OverlaysPageContent key='overlays' />,
	<TablesPageContent key='tables' />,
	<FormsPageContent key='forms' />,
	<SearchAndCommandPalettesPageContent key='search' />,
	<NavigationsPageContent key='navigations' />,
	<PageSectionsPageContent key='sections' />,
	<ContactAndFooterPageContent key='contactAndFooter' />,
	<UserInterfacePageContent key='ui' />,
];

const ExamplePage = () => {
	const [visibleCount, setVisibleCount] = useState(2);

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >= document.body.scrollHeight - 300 &&
				visibleCount < exampleContents.length
			) {
				setVisibleCount((prev) => Math.min(prev + 1, exampleContents.length));
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [visibleCount]);

	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb list={[{ ...pages.examples.exampleMain }]} />
				</HeaderLeft>
				<HeaderRight>
					<ChangeDarkModeTemplate />
					<ChangeLanguageTemplate />
					<EXAMPLE.Ui.Dropdown.Notifications />
				</HeaderRight>
			</Header>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12 flex flex-col items-center justify-center gap-8 py-32'>
						<div className='bg-linear-to-tl from-blue-600 to-purple-400 bg-clip-text text-8xl font-bold text-transparent'>
							580+
						</div>
						<div className='text-6xl'>Examples</div>
						<div className='text max-w-5xl text-center text-2xl text-zinc-500'>
							Here are a lot of suggestions for components and widgets that you can
							easily use in your projects using Tailwind CSS.
						</div>
					</div>

					{exampleContents.slice(0, visibleCount)}
				</div>
			</Container>
		</>
	);
};

export default ExamplePage;
