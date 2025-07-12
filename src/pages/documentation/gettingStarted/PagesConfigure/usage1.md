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