<script>
	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import NavControls from './navcontrols.svelte';
	import { spinfade } from '$lib/transitions';

	import Menu from '~icons/mdi/menu';
	import Close from '~icons/mdi/close';

	/** @type boolean */
	let navOpened = false;

	const routes = {
		'/': 'Home',
		'/about': 'About',
		'/projects': 'Projects'
		//		'/contact': 'Contact',
		//		'/places': 'Places'
	};

	/** @type {"light" | "dark"} */
	let theme = 'dark';

	onMount(() => {
		const tempTheme = document.cookie
			.split('; ')
			.find((row) => row.startsWith('theme='))
			?.split('=')[1];
		if (tempTheme) {
			theme = tempTheme === 'light' ? 'light' : 'dark';
			document.documentElement.setAttribute('data-theme', theme);
		}
	});
</script>

<nav>
	<h1>PSW</h1>
	<div>
		{#each Object.entries(routes) as [route, routeName]}
			<a href={route} class={$page.url.pathname === route ? 'active' : ''}>{routeName}</a>
		{/each}
		<aside>
			<NavControls {theme} />
		</aside>
	</div>
	<span
		on:click={() => (navOpened = !navOpened)}
		role="button"
		tabindex={1}
		on:keypress={(e) => {
			if (e.metaKey) {
				navOpened = !navOpened;
			}
		}}
		transition:spinfade
	>
		{#if navOpened}
			<span in:spinfade={{ in: true }} out:spinfade>
				<Close />
			</span>
		{:else}
			<span in:spinfade={{ in: true }} out:spinfade>
				<Menu />
			</span>
		{/if}
	</span>
</nav>

{#if navOpened}
	<div class="router" transition:slide={{ duration: 200, easing: linear, axis: 'y' }}>
		<div>
			<NavControls {theme} />
		</div>
		{#each Object.entries(routes) as [route, routeName]}
			<a href={route} class={$page.url.pathname === route ? 'active' : ''}>{routeName}</a>
		{/each}
	</div>
{/if}

<style>
	nav {
		width: 100%;
		height: 60px;

		background-color: var(--base-200);
		color: var(--base-200-content);

		position: fixed;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 10vw;

		z-index: 99;

		box-shadow: 0 -20px 40px var(--base-100-content);

		& h1 {
			color: var(--base-100-content);

			font-family: 'poppins';
			font-weight: 300;
			font-size: 3.5rem;

			letter-spacing: -4.5px;
		}

		& span {
			width: 3.5rem;
			height: 3.5rem;

			font-size: 3.5rem;

			position: relative;

			display: block;

			@media screen and (min-width: 1000px) {
				display: none;
			}

			& span {
				position: absolute;
				top: 0;
				left: 0;
			}

			& svg {
				color: var(--base-100-content);
				width: 100%;
				height: 100%;
			}
		}

		& div {
			display: none;
			@media screen and (min-width: 1000px) {
				display: flex;
			}
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;

			gap: 5px;

			& a {
				color: var(--base-100-content);
				text-decoration: none;

				font-size: 18px;

				padding: 3px;

				border-radius: 15px;

				transition: opacity 50ms ease-out;

				&:hover {
					opacity: 0.5;
					transition: opacity 50ms ease-out;
				}

				&.active {
					text-decoration: underline;
					text-decoration-thickness: 5px;
					text-decoration-color: var(--primary);
				}
			}

			& aside {
				padding-left: 20px;

				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: 10px;
			}
		}
	}
	div.router {
		background-color: var(--base-200);
		color: var(--base-200-content);

		position: fixed;
		top: 60px;
		left: 0;

		width: 100%;
		height: fit-content;

		transition: all 200ms ease-out;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0;

		z-index: 98;

		padding-bottom: 20px;

		@media screen and (min-width: 1000px) {
			display: none;
		}

		& div,
		a {
			padding: 1rem 0;
			font-size: 2.5rem;
			color: var(--base-200-content);
			text-align: center;
			width: 100%;
		}
		& div {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			padding-right: 4rem;
			gap: 2rem;
		}
		& a {
			text-decoration: none;

			&.active {
				color: var(--primary);
			}
		}
	}
</style>
