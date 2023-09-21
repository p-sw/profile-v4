<script>
	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { page } from '$app/stores';
	import Icon from 'svelte-icons-pack';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import { onMount } from 'svelte';

	/** @type boolean */
	let navOpened = false;

	const routes = {
		'/': 'Home',
		'/about': 'About'
		//		'/projects': 'Projects',
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
	</div>
	{#if navOpened}
		<span
			on:click={() => (navOpened = false)}
			role="button"
			tabindex={1}
			on:keypress={(e) => {
				if (e.metaKey) {
					navOpened = !navOpened;
				}
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="1em"
				viewBox="0 -960 960 960"
				width="1em"
				fill="var(--base-100-content)"
				><path
					d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
				/></svg
			>
		</span>
	{:else}
		<span
			on:click={() => (navOpened = true)}
			role="button"
			tabindex={1}
			on:keypress={(e) => {
				if (e.metaKey) {
					navOpened = !navOpened;
				}
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="1em"
				viewBox="0 -960 960 960"
				width="1em"
				fill="var(--base-100-content)"
				><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg
			>
		</span>
	{/if}
</nav>

{#if navOpened}
	<div class="router" transition:slide={{ duration: 200, easing: linear, axis: 'y' }}>
		<div>
			<span
				on:click={() => {
					theme = theme === 'dark' ? 'light' : 'dark';
					document.cookie = `theme=${theme};`;
					document.documentElement.setAttribute('data-theme', theme);
				}}
				on:keypress={() => {}}
				role="button"
				tabindex={0}
			>
				{#if theme === 'light'}
					<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"
						><path
							d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"
						/></svg
					>
				{:else if theme === 'dark'}
					<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"
						><path
							d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
						/></svg
					>
				{/if}
			</span>
			<span
				on:click={() => {
					window.open('https://github.com/p-sw/profile-v4', '_blank');
				}}
				on:keypress={() => {}}
				role="button"
				tabindex={0}
			>
				<Icon src={AiFillGithub} color="var(--base-100-content)" />
			</span>
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

			@media screen and (min-width: 1000px) {
				display: none;
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

			& span {
				width: 20px;
				height: 20px;

				& svg {
					width: 20px;
					height: 20px;

					fill: var(--base-100-content);
				}
			}
		}
		& a {
			text-decoration: none;

			&.active {
				color: var(--primary);
			}
		}
	}
</style>
