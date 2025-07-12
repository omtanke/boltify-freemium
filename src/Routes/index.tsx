import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy } from 'react';
import LoginPage from '@/pages/Login.page';
import Protected from '@/Protected/Protected';
import Root from '@/Root';
import DefaultLayout from '@/layouts/Default.layout';
import Providers from '@/Providers/Providers';
import LandingPage from '@/pages/LandingPage/Landing.page';
import pages from './pages';
import Page404Page from '@/pages/Page404.page';
import UnderConstructionPage from '@/pages/UnderConstruction.page';
import DocumentationPages from '@/Routes/infoPages/documentationPages';
import ExamplePages from '@/Routes/infoPages/examplePages';
import RegisterPage from '@/pages/Register.page';

// Lazily loaded components for routes
const SalesLayout = lazy(() => import('@/pages/apps/sales/_layouts/Sales.layout'));
const SalesDashboardPage = lazy(() => import('@/pages/apps/sales/SalesDashboard.page'));
const SalesListPage = lazy(() => import('@/pages/apps/sales/SalesList.page'));
const SalesViewPage = lazy(() => import('@/pages/apps/sales/SalesView.page'));

const CustomerLayout = lazy(() => import('@/pages/apps/customer/_layouts/Customer.layout'));
const CustomerEditPage = lazy(() => import('@/pages/apps/customer/CustomerEdit.page'));
const CustomerViewPage = lazy(() => import('@/pages/apps/customer/CustomerView.page'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Providers />,
		children: [
			{
				path: '/',
				element: <Root />,
				children: [
					{
						path: '/',
						element: <LandingPage />,
					},
					// Public routes
					{
						path: pages.pagesExamples.login.to,
						element: <LoginPage />,
					},
					{
						path: pages.pagesExamples.signup.to,
						element: <RegisterPage />,
					},
					{
						element: <DefaultLayout />,
						children: [...DocumentationPages, ...ExamplePages],
					},
					{
						path: pages.pagesExamples.underConstruction.to,
						element: <UnderConstructionPage />,
					},
					{
						path: '*',
						element: <Page404Page />,
					},
					// Protected routes
					{
						element: <Protected role='admin' />,
						children: [
							{
								element: <DefaultLayout />,
								children: [
									// Apps
									{
										// Sales
										path: pages.apps.sales.to,
										element: <SalesLayout />,
										children: [
											{
												path: pages.apps.sales.to,
												element: <SalesDashboardPage />,
											},
											{
												path: pages.apps.sales.subPages.list.to,
												element: <SalesListPage />,
											},
											{
												path: pages.apps.sales.subPages.view.to,
												element: <SalesViewPage />,
											},
										],
									},
									{
										// Customer
										path: pages.apps.customer.to,
										element: <CustomerLayout />,
										children: [
											{
												path: pages.apps.customer.subPages.edit.to,
												element: <CustomerEditPage />,
											},
											{
												path: pages.apps.customer.subPages.view.to,
												element: <CustomerViewPage />,
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},
]);

const Routes = () => {
	return <RouterProvider router={router} />;
};

export default Routes;
