<script>
	import Navigation from '$lib/components/navigation.svelte';
	import '../globals.css';
</script>

<svelte:head>
  <title>PSWLab</title>
  <meta name="description" content="This is PSWLab, a place where my dream begins" />
</svelte:head>
<Navigation />
<slot />

<style>
	:global(html, body) {
		width: 100%;
		min-height: 100vh;
		height: fit-content;
		font-size: 8px;
		background-color: var(--base-100);
		color: var(--base-100-content);
	}
	:global(body) {
		padding-top: 60px;
	}
</style>
