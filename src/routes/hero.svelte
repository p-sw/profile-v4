<script>
	import { typewriter } from '$lib/transitions';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<section>
	{#if visible}
		<h1 transition:typewriter={{ speed: 1 }}>Hello!</h1>
		<p transition:fade={{ delay: 700, duration: 500 }}>
			I am <a href="https://github.com/p-sw">Shinwoo PARK</a>,<br />a full-stack web developer.
		</p>
	{/if}
</section>

<style>
	section {
		margin-bottom: 10px;

		width: 100%;
		height: calc(100vh - 60px);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		text-align: left;

		padding: 15%;

		font-family: 'poppins', sans-serif;

		& h1 {
			font-weight: 800;
			font-size: 8rem;

			@media screen and (min-width: 800px) {
				font-size: 16rem;
			}
		}

		& p {
			font-weight: 500;
			font-size: 3rem;
			color: var(--base-200-content);
			text-decoration: underline var(--base-200-content);

			@media screen and (min-width: 800px) {
				font-size: 4rem;
			}

			& a {
				color: transparent;
				background-image: linear-gradient(to right, var(--primary), var(--secondary));
				background-clip: text;
			}
		}
	}
</style>
