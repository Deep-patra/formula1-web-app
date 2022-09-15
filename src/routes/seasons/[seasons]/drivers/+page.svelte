<script lang="ts">
	import Drivers from '$lib/drivers/index.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Drivers drivers={data} />
