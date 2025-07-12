[![Netlify Status](https://api.netlify.com/api/v1/badges/baff94a2-4974-402d-bf46-489e601f8c00/deploy-status)](https://app.netlify.com/sites/boltreact/deploys)

# Boltify | React Tailwind Admin & Landing Pages Template

[![Boltify | React Tailwind Admin & Landing Pages Template](./src/assets/cover.png)](https://boltify.omtanke.studio)

# React + TypeScript + Vite

# Getting Started with Vite

This project was bootstrapped with [Vite](https://github.com/vitejs/vite) and [TailwindCSS](https://github.com/tailwindlabs/tailwindcss).

## Install Dependencies

### `npm install` or `yarn install`

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5174](http://localhost:5174) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint` or `yarn run lint`

Controls the project according to Eslint rules.

### `npm run lint:fix` or `yarn run lint:fix`

Inspects the project according to Eslint rules and corrects them according to those rules.

### `npm run prettier:fix` or `yarn run prettier:fix`

Inspects the project according to Prettier rules and corrects them according to those rules.

### `npm run icon` or `yarn run icon`

Prepares svg format icons in the `SvgIcons` folder for use in the project. Names the icon's name in `PascalCase` format.

## Learn More

You can learn more in the [Vite React documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).

# Project Structure

```
boltify
├── public
├── src
│   ├── api
│   ├── assets
│   ├── components
│   ├── config
│   │   └── theme.config.ts
│   ├── constants
│   ├── context
│   ├── examples
│   ├── hooks
│   ├── interface
│   ├── layouts
│   ├── locales
│   ├── mocks
│   ├── pages
│   ├── parts
│   ├── Providers
│   ├── Routes
│   │   ├── infoPages
│   │   │   ├── documentationPages.tsx
│   │   │   └── examplePages.tsx
│   │   ├── index.tsx
│   │   └── pages.ts
│   ├── tailwindcss
│   ├── templates
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── declaration.d.ts
│   ├── i18n.ts
│   ├── index.css
│   ├── main.tsx
│   ├── Root.tsx
│   └── vite-env.d.ts
├── SvgIcons
├── .env
├── .gitignore
├── .npmrc
├── .prettierignore
├── .svgrc
├── .yarnrc.yml
├── eslint.config.mjs
├── index.html
├── package.json
├── prettier.config.js
├── README.md
├── tsconfig.app.json
├── tsconfig.eslint.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

# Pages Configure

```tsx
export const examplePages = {
	parentPage: {
		id: 'parentPage',
		to: '/parent-page',
		text: 'Parent Page',
		icon: 'HeroBookOpen',
		subPages: {
			childPage1: {
				id: 'childPage',
				to: '/parent-page/child-page',
				text: 'Child Page',
				icon: 'HeroBookOpen',
			},
			childPage2: {
				id: 'childPage2',
				to: '/parent-page/child-page-2',
				text: 'Child Page 2',
				icon: 'HeroBookOpen',
			},
		},
	},
};
```

If you save your page information in the above format in the [src/Routes/pages.ts](src/Routes/pages.ts) file, you can easily use it in the menus.

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

## ESLint

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
	// Set the react version
	settings: { react: { version: '18.3' } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs['jsx-runtime'].rules,
	},
});
```
