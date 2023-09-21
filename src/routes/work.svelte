<script>
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let description;
	/** @type {{name: string, url: string, fav?: boolean, most?: boolean}[]} */
	export let tech;
	/** @type {number} */
	export let selfIndex;

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiFillCrown from 'svelte-icons-pack/ai/AiFillCrown';
	import { slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let opened = false;

	/** @type {import('svelte/transition').TransitionConfig} */
	let visibleConfiguration = { delay: selfIndex * 100, duration: 600 };

	/** @type {Element} */
	let worker;

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
		).observe(worker);
	});
</script>

<article bind:this={worker}>
	{#if visible}
		<button on:click={() => (opened = !opened)} transition:fade={visibleConfiguration}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 -960 960 960"
				width="24"
				class={opened ? 'opened' : ''}
				fill={'var(--base-100-content)'}
				><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" /></svg
			>
		</button>
		<div transition:fade={visibleConfiguration}>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
		{#if opened}
			<div transition:slide>
				{#each tech as a_tech}
					<a href={a_tech.url} class={a_tech.fav ? 'fav' : ''}>
						{#if a_tech.most}
							<Icon src={AiFillCrown} color="var(--base-100-content)" />
						{/if}
						{a_tech.name}
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</article>

<style>
	article {
		display: grid;

		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;

		column-gap: 20px;
		row-gap: 10px;

		& button {
			background: transparent;
			border: none;

			& svg {
				width: 20px;
				height: 20px;

				transition: transform 200ms ease-out;

				cursor: pointer;

				&.opened {
					transform: rotateX(180deg);
					transition: transform 200ms ease-out;
				}
			}
		}

		& div {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 5px;

			grid-column: 2;

			& h2 {
				font-size: 20px;
				font-weight: 600;
				color: var(--secondary);
			}

			& p {
				font-size: 16px;
				font-weight: 300;
			}

			& a {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: 5px;

				width: 200px;
				text-align: center;

				font-size: 16px;

				padding: 5px 10px;
				border: 1px solid var(--base-100-content);

				text-decoration: none;
				color: var(--base-100-content);

				&.fav {
					background-color: gold;
					color: #000000;

					& svg {
						fill: #000000;
					}
				}
			}
		}
	}
</style>
