<script>
	import Work from './work.svelte';
	import { typewriter } from '$lib/transitions';
	import { onMount } from 'svelte';

	/** @type {Element} */
	let workSections;

	let visible = false;

	onMount(() => {
		new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0) {
						visible = true;
					}
				});
			},
			{
				threshold: 0.3
			}
		).observe(workSections);
	});

	/** @type {{title: string, description: string, tech: {name: string, url: string, fav?: boolean, most?: boolean}[]}[]} */
	const works = [
		{
			title: 'Frontend',
			description: 'With my awesome coding skill, you can meet your dream in real.',
			tech: [
				{
					name: 'ReactJS',
					url: 'https://react.dev/'
				},
				{
					name: 'Svelte',
					url: 'https://svelte.dev/'
				},
				{
					name: 'NextJS',
					url: 'https://nextjs.org',
					most: true
				},
				{
					name: 'SvelteKit',
					url: 'https://kit.svelte.dev/',
					fav: true
				},
				{
					name: 'TailwindCSS',
					url: 'https://tailwindcss.com/',
					most: true,
					fav: true
				},
				{
					name: 'ChakraUI',
					url: 'https://chakra-ui.com/'
				},
				{
					name: 'DaisyUI',
					url: 'https://daisyui.com/'
				}
			]
		},
		{
			title: 'Backend',
			description: "Giving awesome abilities to their web app, feel they're live.",
			tech: [
				{
					name: 'NextJS',
					url: 'https://nextjs.org/',
					most: true
				},
				{
					name: 'SvelteKit',
					url: 'https://kit.svelte.dev/',
					fav: true
				},
				{
					name: 'NestJS',
					url: 'https://nestjs.com/'
				},
				{
					name: 'FastAPI',
					url: 'https://fastapi.tiangolo.com/'
				},
				{
					name: 'Django',
					url: 'https://www.djangoproject.com/'
				},
				{
					name: 'Flask',
					url: 'https://flask.palletsprojects.com/'
				}
			]
		},
		{
			title: 'Server',
			description: 'Managing linux servers, so your dream can meet your customers.',
			tech: [
				{
					name: 'Nginx',
					url: 'https://www.nginx.com',
					most: true,
					fav: true
				},
				{
					name: 'PM2',
					url: 'https://pm2.keymetrics.io/'
				},
				{
					name: 'Docker',
					url: 'https://www.docker.com/'
				}
			]
		}
	];
</script>

<section bind:this={workSections} class="works">
	{#if visible}
		<h1 transition:typewriter={{ speed: 1 }}>My Roads</h1>
		<section>
			{#each works as work, index}
				<Work {...work} selfIndex={index} />
			{/each}
		</section>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;

		gap: 30px;
	}

	section.works {
		padding: 10vh 5vw;
		& h1 {
			font-size: 40px;
			font-weight: 700;

			color: var(--primary);

			@media screen and (min-width: 800px) {
				font-size: 60px;
			}
		}
	}
</style>
