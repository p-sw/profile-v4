<script>
	import projectData from './projects';
	import { fade } from 'svelte/transition';
	import { fadeheight } from '$lib/transitions';
	import Menu from '~icons/mdi/menu';
	import Close from '~icons/mdi/close';
	import Folder from '~icons/mdi/folder';
	import Subdirectory from '~icons/mdi/subdirectory-arrow-right';
	import FolderOpen from '~icons/mdi/folder-open-outline';

	let isMenuOpened = false;
	/** @type {string[]} */
	let openedCategory = [];
</script>

<nav class="wid">
	{#each projectData as { name, icon, projects } (name)}
		<div>
			<header
				on:click={() => {
					if (openedCategory.includes(name)) {
						openedCategory = openedCategory.filter((v) => v !== name);
					} else {
						openedCategory = [...openedCategory, name];
					}
				}}
				role="checkbox"
				aria-checked={openedCategory.includes(name)}
				on:keypress
				tabindex={2}
			>
				{#if openedCategory.includes(name)}
					<FolderOpen />
				{:else}
					<Folder />
				{/if}
				{@html icon}
				{name}
			</header>
			{#each projects as project, index}
				{#if openedCategory.includes(name)}
					<a
						href="/projects/{name}#{project.slug}"
						in:fadeheight={{ delay: index * 40, duration: 100 }}
						out:fadeheight={{ delay: (projects.length - index) * 40, duration: 100 }}
						><Subdirectory />{project.name}</a
					>
				{/if}
			{/each}
		</div>
	{/each}
</nav>
<nav class="mob">
	<span
		on:click={() => (isMenuOpened = !isMenuOpened)}
		role="button"
		tabindex={2}
		on:keypress={() => {}}
	>
		{#if isMenuOpened}
			<b>Close</b>
			<Close />
		{:else}
			<b>Menu</b>
			<Menu />
		{/if}
	</span>
	{#each projectData as { name, icon }, index}
		{#if isMenuOpened}
			<span
				in:fade={{ delay: index * 30, duration: 100 }}
				out:fade={{ delay: (projectData.length - index) * 30, duration: 100 }}
			>
				<b>{name}</b>
				<a href="/projects/{name}">{@html icon}</a>
			</span>
		{/if}
	{/each}
</nav>

<style>
	nav {
		z-index: 10;
	}
	.mob {
		position: fixed;
		bottom: 0;
		right: 0;

		display: flex;
		flex-direction: column-reverse;

		padding-right: 5vw;
		padding-bottom: 5vw;

		gap: 5px;

		@media screen and (min-width: 1000px) {
			display: none;
		}

		& span {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			gap: 6px;

			font-size: 16px;

			& b {
				font-weight: 400;

				background-color: var(--base-200);
				color: var(--base-200-content);

				padding: 3px 8px;

				border-radius: 4px;
			}

			& svg {
				font-size: 2.8em;

				padding: 10px;

				background-color: var(--primary);
				border-radius: 100%;
				color: #fff;

				aspect-ratio: 1;
			}
		}
	}

	.wid {
		display: none;
		@media screen and (min-width: 1000px) {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}

		gap: 0;

		width: 30vw;
		height: calc(100vh - 60px);

		position: fixed;
		top: 60px;
		left: 0;

		padding-top: 20px;

		overflow-y: auto;

		background-color: var(--base-200);

		& div {
			width: 100%;
			height: fit-content;
			padding: 0 10%;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;

			& header,
			a {
				width: 100%;
				height: fit-content;
				padding: 5px 0;

				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				gap: 10px;

				font-size: 16px;

				color: var(--base-200-content);

				text-decoration: none;
			}
		}
	}
</style>
