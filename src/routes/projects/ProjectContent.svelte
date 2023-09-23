<script>
	/** @type {string} */
	export let name;
	/** @type {any} */
	export let icon;
	/** @type {import('$lib/types/projects').Project[]} */
	export let projects;

	import Github from '~icons/mdi/github';
	import Web from '~icons/mdi/web';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		console.log($page.url.pathname);
		const el = $page.url.hash ? document.querySelector($page.url.hash) : null;
		if (el) {
			window.scrollTo({
				behavior: 'instant',
				top: 0
			});
			window.scrollTo({
				behavior: 'smooth',
				top: el.getBoundingClientRect().y - 100
			});
		}
	});
</script>

<section>
	<header>
		{@html icon}
		{name}
	</header>
	{#each projects as project}
		<hr />
		<article id={project.slug}>
			<header>
				<h2>{project.name}</h2>
				{#if project.web || project.git}
					<span>
						{#if project.web}
							<Web />
						{/if}
						{#if project.git}
							<Github />
						{/if}
					</span>
				{/if}
			</header>
			<p>{project.description}</p>
			{#if project.src}
				<aside style:background-image="url({project.src})" />
			{/if}
		</article>
	{/each}
</section>

<style>
	section {
		& hr {
			background-color: var(--base-200-content);
			width: 100%;
			height: 1px;
		}

		@media screen and (min-width: 1000px) {
			padding-left: calc(30vw + 60px);
			padding-right: 60px;
		}
		padding: 6vh 5vw;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10vh;

		& > header {
			font-size: 48px;
			font-weight: 900;

			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 12px;
		}

		& article {
			font-size: 16px;
			font-weight: 600;

			& header {
				font-size: 2em;
				font-weight: 500;

				& h2 {
					width: 100%;
				}

				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				justify-content: flex-start;
				align-items: flex-start;
				gap: 5px;

				margin-bottom: 15px;

				& svg {
					font-size: 0.6em;
				}
			}

			& p {
				font-size: 1em;
				font-weight: 300;
				opacity: 0.6;
				margin-bottom: 25px;
			}

			& aside {
				max-width: 600px;
				aspect-ratio: 16/9;

				border: 5px solid var(--secondary);

				background-repeat: no-repeat;
				background-size: cover;
			}
		}
	}
</style>
