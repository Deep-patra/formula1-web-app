<script lang="ts">
	import type { PageData } from './$types';
	import Results from '$lib/qualifying_result/results.svelte';

	export let data: PageData;
</script>

<Results results={data} />
