<script>
	/** @type {string} */
	export let name;
	/** @type {any} */
	export let icon;
	/** @type {import('$lib/types/projects').Project[]} */
	export let projects;

	import Github from '~icons/mdi/github';
	import Web from '~icons/mdi/web';
</script>

<section>
	<header>
		{icon}
		{name}
	</header>
	{#each projects as project}
		<article>
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
				<aside />
			{/if}
		</article>
	{/each}
</section>

<style>
	section {
		@media screen and (min-width: 1000px) {
			padding-left: calc(30vw + 60px);
			padding-right: 60px;
			padding-top: 6vh;
			padding-bottom: 6vh;
		}
	}
</style>
