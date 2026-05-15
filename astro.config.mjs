// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://Huntsmanco.github.io',
	base: '/Linux-guides/',

	integrations: [
		starlight({
			title: 'Linux Guides',
			description: 'Arch Linux fixes, Hyprland setup notes, and troubleshooting logs',

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Huntsmanco/Linux-guides'
				}
			],

			logo: {
				src: './src/assets/houston.webp',
				alt: 'Linux Guides'
			},

			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Home', slug: '/' }
					],
				},

				{
					label: 'Arch Linux',
					items: [
						{ autogenerate: { directory: 'arch' } }
					],
				},

				{
					label: 'Hyprland / Desktop',
					items: [
						{ autogenerate: { directory: 'hyprland' } }
					],
				},

				{
					label: 'Networking',
					items: [
						{ autogenerate: { directory: 'networking' } }
					],
				},

				{
					label: 'Troubleshooting',
					items: [
						{ autogenerate: { directory: 'troubleshooting' } }
					],
				},
			],
		}),
	],
});
