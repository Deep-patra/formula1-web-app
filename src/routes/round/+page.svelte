<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	if (browser) {
		const { url } = $page;
		const { searchParams } = url;

		const href = `/round/race?season=${searchParams.get('season')}&round=${searchParams.get(
			'round'
		)}`;

		goto(href);
	}
</script>
