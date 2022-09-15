<script lang="ts">
	import { goto } from '$app/navigation';
	import EventItem from './event_item.svelte';
	import { page } from '$app/stores';
	import { scale } from '../utils/scale.transition';

	export let race: Round;
	export let index: number;

	const {
		url,
		round,
		raceName,
		Circuit,
		date,
		time,
		FirstPractice,
		SecondPractice,
		ThirdPractice,
		Qualifying,
		Sprint
	} = race;

	const { circuitName, Location } = Circuit;
	const oneDayMS = 24 * 60 * 60 * 100;

	const isRaceAlreadyOver = (date: string): boolean => {
		const date_array: number[] = date.split('-').map((value) => parseInt(value));

		const date_ms: number = new Date().setUTCFullYear(date_array[0], date_array[1], date_array[2]);

		if (date_ms + oneDayMS < Date.now()) return true;
		else return false;
	};

	let race_results = isRaceAlreadyOver(date);

	const handleRaceResults = () => {
		const href = $page.url.pathname;
		const season = href.split('/')[2];

		goto(`/round?round=${round}&season=${season}`);
	};
</script>

<li transition:scale={{ delay: index * 50 }}>
	<div class="round_item">
		<div class="title_wrapper flex_row">
			<div class="raceName_wrapper">
				<span class="index_wrapper">{`${round}.`}</span>
				<span class="raceName">
					<a href={url} target="__blank">{raceName}</a>
				</span>
			</div>

			<div class="location_wrapper flex_row">
				<img
					class="country_image"
					src={`https://countryflagsapi.com/png/${Location.country}`}
					alt={`${Location.country} flag`}
				/>
				<span>{`${Location.locality}, ${Location.country}`}</span>
			</div>
		</div>

		<div class="circuitname_wrapper">
			<span>{circuitName}</span>
		</div>

		<div class="content_wrapper">
			<EventItem text="FP1" time_date={FirstPractice} />

			<EventItem text="FP2" time_date={SecondPractice} />

			{#if ThirdPractice}
				<EventItem text="FP3" time_date={ThirdPractice} />
			{/if}

			<EventItem text="Qualifying" time_date={Qualifying} />

			{#if Sprint}
				<EventItem text="Sprint" time_date={Sprint} />
			{/if}
		</div>

		{#if race_results}
			<button
				type="button"
				class="race_results_button"
				aria-label="race results button"
				on:click={handleRaceResults}
			>
				Race Results
			</button>
		{:else}
			<button type="button" class="TBD_button" aria-label="TBD button" disabled> TBD </button>
		{/if}
	</div>
</li>

<style>
	.round_item {
		padding: 10px;
		border-bottom: solid 2px gray;
	}

	.index_wrapper {
		font-size: 20px;
		font-family: monospace;
		color: var(--primary-text-color);
	}

	.circuitname_wrapper {
		color: var(--primary-text-color);
		font-family: monospace;
		font-size: 16px;
		padding: 5px;
		padding-left: 20px;
	}

	.raceName a {
		font-size: 24px;
		text-decoration: none;
		color: var(--primary-color);
		font-family: cursive;
	}

	.raceName a:hover {
		text-decoration: underline;
	}

	.title_wrapper {
		justify-content: space-between;
	}

	.flex_row {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}

	.location_wrapper {
		width: 200px;
		font-family: monospace;
		color: rgba(255, 255, 255, 0.4);
	}

	.location_wrapper:hover {
		color: var(--primary-text-color);
	}

	.location_wrapper span {
		padding-left: 10px;
	}

	.round_item {
		display: flex;
		flex-flow: column nowrap;
	}

	.country_image {
		width: 40px;
		height: 20px;
	}

	.content_wrapper {
		display: flex;
		flex-flow: row wrap;
	}

	.race_results_button {
		padding: 6px 12px;
		color: var(--primary-color);
		border: solid 1px var(--primary-color);
		font-family: monospace;
		font-size: 20px;
		width: fit-content;
		height: fit-content;
		border-radius: 8px;
		align-self: flex-end;
	}

	.TBD_button {
		align-self: flex-end;
		font-size: 20px;
		font-family: monospace;
		color: var(--primary-text-color);
	}

	.race_results_button:hover {
		background-color: var(--primary-color);
		color: var(--primary-text-color);
	}

	@media screen and (max-width: 700px) {
		.round_item {
			padding: 10px 0px;
		}

		.location_wrapper {
			width: min-content;
			font-size: 12px;
		}

		.race_results_button,
		.TBD_button {
			font-size: 14px;
		}

		.raceName a {
			font-size: 18px;
		}

		.circuitname_wrapper {
			font-size: 12px;
		}

		.country_image {
			width: 30px;
			height: 15px;
		}
	}
</style>
