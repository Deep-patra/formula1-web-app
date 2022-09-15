<script lang="ts">
	import SeasonDropdown from '$lib/season_dropdown.svelte';
	import ButtonWrapper from '$lib/button_wrapper.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	let selected_season: number = 2022;
	let buttons: any = { Rounds: true, Drivers: false, Constructor: false };

	const change_season = (season: number) => {
		selected_season = season;
	};

	const handleNav = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const label = target.dataset.label;

		const def: any = { Rounds: false, Drivers: false, Constructor: false };
		def[`${label}`] = true;

		buttons = { ...def };
	};

	$: if (browser) {
		if (buttons.Rounds) goto(`/seasons/${selected_season}/rounds`);
		else if (buttons.Drivers) goto(`/seasons/${selected_season}/drivers`);
		else goto(`/seasons/${selected_season}/constructors`);
	}
</script>

<h2>Formula1-info</h2>

<main>
	<SeasonDropdown {selected_season} {change_season} />

	<ButtonWrapper>
		{#each Object.keys(buttons) as label}
			<button
				type="button"
				data-label={label}
				class={`nav_button ${buttons[`${label}`] === true ? 'active glass' : ''}`}
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
		font-family: cursive;
		color: var(--primary-color);
	}

	.nav_button {
		font-size: 1.2rem;
		margin: 0 10px;
		font-family: cursive;
		color: var(--primary-text-color);
		padding: 5px 10px;
		border: solid 1px transparent;
		border-radius: 8px;
	}

	.nav_button:hover {
		color: #fff;
	}

	.active {
		border-color: #fff;
	}

	@media screen and (max-width: 750px) {
		.nav_button {
			font-size: 1rem;
		}
	}
</style>
