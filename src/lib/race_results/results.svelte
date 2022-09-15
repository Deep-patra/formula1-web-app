<script lang="ts">
	import RaceItem from './race_item.svelte';

	export let results: Result[];
</script>

<ul>
	{#each results as result}
		<RaceItem {result} />
	{/each}
</ul>
