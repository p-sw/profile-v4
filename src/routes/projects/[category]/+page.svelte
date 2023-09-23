<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import ProjectContent from '../ProjectContent.svelte';
	import projectData from '../projects';

	let categoryData = projectData.filter((v) => v.slug === data.category)[0];
</script>

{#if categoryData}
	<ProjectContent
		name={categoryData.name}
		icon={categoryData.icon}
		projects={categoryData.projects}
	/>
{/if}
