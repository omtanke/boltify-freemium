```tsx
// ...

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

// ...
```
