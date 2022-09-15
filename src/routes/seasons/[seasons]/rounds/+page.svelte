<script lang="ts">
	import type { PageData } from './$types';
	import Rounds from '$lib/rounds.svelte';

	export let data: PageData = [];
</script>

<svelte:head>
	<link rel="prefetch" href="drivers" />
	<link rel="prefetch" href="constructors" />
</svelte:head>

<Rounds races={data} />
