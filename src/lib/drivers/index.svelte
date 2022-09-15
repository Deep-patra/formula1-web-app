<script lang="ts">
	import DriverItem from './driver_item.svelte';

	export let drivers: Drivers[] = [];
</script>

{#each Object.values(drivers) as driver, index}
	<DriverItem {driver} {index} />
{/each}

<style>
</style>
