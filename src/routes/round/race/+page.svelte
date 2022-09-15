<script lang="ts">
	import ResultsComp from '$lib/race_results/results.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { Results } = data;
</script>

<ResultsComp results={Results} />
