```tsx
const router = createBrowserRouter([
	{
		path: '/',
		element: <Providers />,
		children: [
			{
				path: '/',
				element: <Root />, // Here is the first loading animation.
				children: [
					//Since there is no layout here, there will be no Aside or Header.
					// You can add it within the page or if the same structure will be used on multiple pages, a layout can be added.
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
						path: pages.pagesExamples.underConstruction.to,
						element: <UnderConstructionPage />,
					},
					{
						path: '*',
						element: <Page404Page />,
					},
					// Protected routes
					{
						element: <Protected role='admin' />, // You can authorize according to roles here
						children: [
							{
								element: <DefaultLayout />, //There is Aside in the DefaultLayout and it will be on all the pages below. If multiple Asides are required, different layouts can be used here.
								children: [
									// Apps
									{
										// Sales
										path: pages.apps.sales.to,
										element: <SalesLayout />, // There is a Header in the SalesLayout and it will be on all the pages below. If more than one Header is required, different layouts can be used here.
										children: [
											{
												path: pages.apps.sales.to,
												element: <SalesDashboardPage />,
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
```