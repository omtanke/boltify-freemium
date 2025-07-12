import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Bolt | React Tailwind',
				short_name: 'Bolt',
				start_url: '/',
				display: 'standalone',
				background_color: '#000000',
				theme_color: '#000000',
				icons: [
					{
						src: '/logo192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/logo512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
			workbox: {
				maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
			},
		}),
	],
	assetsInclude: ['**/*.md'],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'build',
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('MdViewer')) return 'chunk-mdviewer';
					if (id.includes('react-syntax-highlighter')) return 'chunk-highlighter';
					if (id.includes('/Icon')) return 'chunk-icon';
					if (id.includes('node_modules')) return 'vendor';
				},
			},
		},
	},
});
