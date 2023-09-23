<script>
	/** @type {"light" | "dark"} */
	export let theme;

	import Github from '~icons/mdi/github';
	import DarkMode from '~icons/ic/baseline-dark-mode';
	import LightMode from '~icons/ic/baseline-light-mode';
</script>

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
		<LightMode />
	{:else if theme === 'dark'}
		<DarkMode />
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
	<Github />
</span>

<style>
	span {
		width: 20px;
		height: 20px;

		& svg {
			width: 20px;
			height: 20px;

			color: var(--base-100-content);
		}
	}
</style>
