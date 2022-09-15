<script lang="ts">
	import Constructors from '$lib/constructors/constructors.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Constructors constructors={data} />
