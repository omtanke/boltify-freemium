import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';

const OrdersExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.tables },
							{
								...pages.examples.exampleMain.subPages.tables.subPages.orders,
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
					<div className='col-span-12 flex flex-col items-center justify-center gap-8 py-32'>
						<div className='text-6xl'>Orders Tables</div>
						<div className='text max-w-5xl text-center text-2xl text-zinc-500'>
							Click tabs, explore modals, set dates in date pickers, table with
							dropdowns - all featuring in Orders Admin Table examples.{' '}
						</div>
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>
						SearchableFilterOrderTable
					</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Table.Orders.SearchableFilterOrderTable />
					</div>
				</div>
			</Container>
		</>
	);
};

export default OrdersExamplePage;
