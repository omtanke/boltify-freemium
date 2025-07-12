import js from '@eslint/js';
import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
				},
			},
		},
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		...pluginReact.configs.flat.recommended,
		languageOptions: {
			...pluginReact.configs.flat.recommended.languageOptions,
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			react: pluginReact,
			import: pluginImport,
			'jsx-a11y': pluginJsxA11y,
			'@typescript-eslint': tseslint.plugin,
			prettier,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...pluginReact.configs.recommended.rules,
			...pluginReact.configs['jsx-runtime'].rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'no-use-before-define': 'off',
			'no-case-declarations': 'off',
			'no-underscore-dangle': 'off',
			'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
			'no-param-reassign': 'off',
			'no-empty': 'warn',
			'import/no-extraneous-dependencies': 'warn',
			'react/jsx-props-no-spreading': [
				'warn',
				{
					html: 'ignore',
					custom: 'enforce',
					explicitSpread: 'enforce',
					exceptions: [
						'NavItem',
						'NavCollapse',
						'Icon',
						'Resizable',
						'Checkbox',
						'IndeterminateCheckbox',
						'Table',
					],
				},
			],
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			],
			'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/anchor-is-valid': 'warn',
			'jsx-a11y/click-events-have-key-events': 'warn',
			'jsx-a11y/no-noninteractive-tabindex': 'warn',
			'jsx-a11y/no-distracting-elements': 'warn',
			'jsx-a11y/no-autofocus': 'warn',
			'jsx-a11y/aria-props': 'warn',
			'jsx-a11y/aria-proptypes': 'warn',
			'jsx-a11y/aria-unsupported-elements': 'warn',
			'jsx-a11y/lang': 'warn',
			'jsx-a11y/label-has-associated-control': [
				'warn',
				{
					depth: 3,
				},
			],
			'jsx-a11y/control-has-associated-label': 'warn',
			'react-hooks/exhaustive-deps': 'error',
			'react-hooks/rules-of-hooks': 'error',
			'react/function-component-definition': [
				2,
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/no-arrow-function-lifecycle': 'off',
			'react/no-invalid-html-attribute': 'off',
			'react/no-unused-class-component-methods': 'off',
			'import/no-anonymous-default-export': [
				'error',
				{
					allowArray: true,
					allowArrowFunction: false,
					allowAnonymousClass: false,
					allowAnonymousFunction: false,
					allowCallExpression: true, // The true value here is for backward compatibility
					allowLiteral: false,
					allowObject: true,
				},
			],
			'arrow-body-style': ['off'],
			'react/jsx-key': ['error'],
			'prettier/prettier': ['error'],
			'react/require-default-props': ['off'],
			'object-shorthand': ['error', 'always'],
			'react/jsx-boolean-value': ['error', 'never'],
		},
	},
	{
		ignores: [
			'**/temp.js',
			'config/*',
			'node_modules/',
			'build/',
			'src/components/icon/',
			'src/assets',
			'**.config.*',
		],
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/ban-ts-ignore': 'off',
			'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'ignore' }],
			'react/self-closing-comp': ['warn', { component: true, html: false }],
			'template-curly-spacing': ['error', 'never'],
			'prefer-template': 'error',
			'react/react-in-jsx-scope': 'off',
		},
	},
);
