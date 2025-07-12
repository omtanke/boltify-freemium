import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
import { useOutletContext } from 'react-router';
import { OutletContextType } from '@/pages/apps/sales/_layouts/Sales.layout';
import { useEffect } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';

const SalesListPage = () => {
	const { setHeaderLeft } = useOutletContext<OutletContextType>();
	useEffect(() => {
		setHeaderLeft(
			<Breadcrumb list={[{ ...pages.apps.sales }, { ...pages.apps.sales.subPages.list }]} />,
		);
		return () => {
			setHeaderLeft(undefined);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<EXAMPLE.Table.Orders.SearchableFilterOrderTable />
		</Container>
	);
};

export default SalesListPage;
