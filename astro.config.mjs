// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://Huntsmanco.github.io',
	base: '/Linux-guides/',

	integrations: [
		starlight({
			title: 'My Docs',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Huntsmanco/Linux-guides'
				}
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
