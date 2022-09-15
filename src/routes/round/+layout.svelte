<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import ButtonWrapper from '$lib/button_wrapper.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let buttons: any = { Race: true, Qualifying: false };

	const handleNav = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const label = target.dataset.label;

		const def: any = { Race: false, Qualifying: false };

		def[`${label}`] = true;

		buttons = { ...def };
	};

	const { raceName } = data;

	$: {
		if (browser) {
			const url = $page.url;
			const { searchParams } = url;

			if (buttons.Race === true) {
				goto(
					`/round/race?round=${searchParams.get('round') || '1'}&season=${
						searchParams.get('season') || '2022'
					}`
				);
			} else if (buttons.Qualifying === true) {
				goto(
					`/round/qualifying?round=${searchParams.get('round') || 1}&season=${
						searchParams.get('season') || '2022'
					}`
				);
			}
		}
	}
</script>

<h2>Formula1-info</h2>

<div class="heading_wrapper">
	<span>
		{raceName}
	</span>
</div>

<main>
	<ButtonWrapper>
		{#each Object.keys(buttons) as label}
			<button
				type="button"
				class={`nav_button ${buttons[`${label}`] === true ? 'active' : ''}`}
				data-label={label}
				on:click={handleNav}
			>
				{label}
			</button>
		{/each}
	</ButtonWrapper>
	<slot />
</main>

<style>
	h2 {
		color: var(--primary-color);
		font-family: cursive;
		margin-bottom: 20px;
	}

	.heading_wrapper {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}

	.heading_wrapper span {
		font-size: 28px;
		font-family: cursive;
		color: var(--primary-text-color);
	}

	.nav_button {
		font-family: monospace;
		font-size: 18px;
		margin: 5px 10px;
		border: solid 1px transparent;
		border-radius: 10px;
		color: var(--primary-text-color);
		padding: 8px 16px;
	}

	.active {
		border-color: var(--primary-text-color);
		color: white;
	}

	@media screen and (max-width: 700px) {
		.h2 {
			margin-bottom: 10px;
		}

		.heading_wrapper span {
			font-size: 18px;
			margin-bottom: 10px;
		}

		.nav_button {
			font-size: 12px;
		}
	}
</style>
