<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { clickAway } from '../utils/clickAway';

	export let selected_season: number = 2022;
	export let change_season: Function = () => {};

	let open_dropdown = false;
	let season_list: number[] = [];

	const toggleSeasonDropDown = () => {
		open_dropdown = !open_dropdown;
	};

	const closeDropDown = () => {
		open_dropdown = false;
	};

	const handleSeasonClick = (event: MouseEvent) => {
		const button = event.target;
		const season = (button! as HTMLElement).dataset.season;

		const year = isNaN(parseInt(season as string)) ? 2022 : parseInt(season as string);
		change_season(year);
	};

	const initSeasonList = () => {
		for (let season = new Date().getFullYear(); season > 1950; season--) season_list.push(season);
	};

	initSeasonList();

	const grow = (Node: HTMLElement, { duration = 200, easing = quintOut, delay = 0 }) => {
		return {
			duration,
			easing,
			delay,
			css: (t: number) => `height: ${t * 300}px`
		};
	};
</script>

<div class="season_selector_wrapper">
	<span class="label">Season</span>

	<button
		type="button"
		aria-label="Change season button"
		class="dropdown_button"
		on:click={toggleSeasonDropDown}
	>
		<span>{selected_season}</span>
		{#if open_dropdown}
			<div class="dropdown glass" use:clickAway on:outClick={closeDropDown} transition:grow>
				{#each season_list as season}
					<button
						type="button"
						class={season === selected_season ? 'active' : ''}
						data-season={season}
						on:click={handleSeasonClick}
					>
						{season}
					</button>
				{/each}
			</div>
		{/if}
	</button>
</div>

<style>
	.season_selector_wrapper {
		display: flex;
		flex-flow: row nowrap;
		padding: 10px;
		font-family: cursive;
		margin: 20px;
	}

	.label {
		color: var(--primary-text-color);
		font-size: 1.5rem;
		margin-right: 2%;
	}

	.dropdown_button {
		font-size: 1.3rem;
		text-align: center;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		position: relative;
		border: solid 1px var(--primary-text-color);
		padding: 5px 10px;
		border-radius: 8px;
		color: var(--primary-text-color);
	}

	.dropdown_button:hover {
		border-color: var(--primary-color);
	}

	.dropdown_button span {
		font-family: monospace;
	}

	.dropdown {
		padding: 10px;
		border-radius: 10px;
		max-height: 300px;
		overflow: auto;
		position: absolute;
		top: 100%;
		right: 0;
		z-index: 100;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		margin-top: 10px;
		border: solid 1px rgba(255, 255, 255, 0.5);
	}

	.dropdown button {
		font-family: monospace;
		font-size: 1.2rem;
	}

	.dropdown .active {
		color: var(--primary-color);
	}

	@media screen and (max-width: 750px) {
		.season_selector_wrapper {
			margin: 10px;
		}

		.label {
			font-size: 1.3rem;
		}

		.dropdown_button {
			font-size: 1.1rem;
			padding: 5px 10px;
			margin-left: 10px;
		}
	}
</style>
