<script lang="ts">
	import RoundItem from './round_item.svelte';

	export let races: Round[] = [];
</script>

<ul>
	{#each Object.values(races) as race, index}
		<RoundItem {race} {index} />
	{/each}
</ul>
