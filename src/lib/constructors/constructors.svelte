<script lang="ts">
	import ConstructorItem from './constructor_item.svelte';

	export let constructors: Team[];
</script>

{#each Object.values(constructors) as constructor}
	<ul>
		<ConstructorItem team={constructor} />
	</ul>
{/each}
