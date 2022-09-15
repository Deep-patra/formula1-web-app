<script lang="ts">
	import ResultItem from './result_item.svelte';
	export let results: Qualifying;

	const { QualifyingResults } = results;
</script>

<ul>
	{#each QualifyingResults as result, index}
		<ResultItem {result} {index} />
	{/each}
</ul>
