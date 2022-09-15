<script lang="ts">
	import { page } from '$app/stores';
	import InfoItem from './info_item.svelte';
	import LapChart from './lap_chart.svelte';
	import { API } from '../../utils/API';
	import { clickAway } from '../../utils/clickAway';
	import { quintOut } from 'svelte/easing';

	export let result: Result;

	const { position, Time, points, Driver, Constructor, FastestLap, status, grid, laps } = result;

	const { AverageSpeed } = FastestLap;
	const { name } = Constructor;

	const { driverId, givenName, familyName, url, permanentNumber, nationality, dateOfBirth } =
		Driver;

	let open = false;

	const open_info = (event: MouseEvent) => {
		open = true;
	};

	const close_info = () => {
		open = false;
	};

	const grow = (node: HTMLElement, { duration = 400, easing = quintOut, delay = 0 }) => {
		const height = parseInt(getComputedStyle(node).height);

		return {
			duration,
			easing,
			delay,
			css: (t: number) => `height: ${t * height}`
		};
	};

	const current_url = $page.url;
	const round = parseInt(current_url.searchParams.get('round') || '1');
	const season = parseInt(current_url.searchParams.get('season') || `${new Date().getFullYear()}`);
</script>

<li>
	<div class="result_item">
		<div class="title_wrapper">
			<span class="index">
				<p>{position}.</p>
			</span>

			<span class="name_wrapper">
				<p>#{permanentNumber}</p>
				<a href={url} class="name">
					{`${givenName} ${familyName}`}
				</a>
				<a href={Constructor.url} class="constructor_name">
					({name})
				</a>
			</span>

			<span class="time_wrapper">
				{Time === undefined ? 'DNF' : Time.time}
			</span>

			<span class="points_wrapper">
				+{points}
			</span>
		</div>

		<div class="more_info_wrapper">
			<InfoItem label={'DOB'} value={dateOfBirth} />
			<InfoItem label={'Nationality'} value={nationality} />

			{#if !open}
				<button type="button" class="more_info_button" on:click={open_info}> More Info </button>
			{/if}
		</div>

		{#if open}
			<div class="box_wrapper" transition:grow use:clickAway on:outClick={close_info}>
				<div class="info_container">
					<div class="details">
						<span class="detail_item">
							<p class="label">Fastest Lap:</p>
							<p class="value">{FastestLap.Time.time || '-- --'}</p>
						</span>

						<span class="detail_item">
							<p class="label">Grid Position:</p>
							<p class="value">{grid}</p>
						</span>

						<span class="detail_item">
							<p class="label">Laps Completed:</p>
							<p class="value">{laps}</p>
						</span>

						{#if status !== 'Finished'}
							<span class="detail_item">
								<p class="label">DNF:</p>
								<p class="value">{status}</p>
							</span>
						{/if}
					</div>

					<div class="average_speed_wrapper">
						<div class="average_speed">
							<span class="label">Average Speed</span>
							<span class="value"
								>{`${AverageSpeed.speed || 0.0}${AverageSpeed.units || 'kmph'}`}</span
							>
						</div>
					</div>
				</div>

				<div class="chart_wrapper">
					{#await API.getDriverLaps(season, round, driverId)}
						<p class="loading">Loading...</p>
					{:then laps}
						<LapChart {laps} />
					{:catch error}
						<p class="error">Error in fetching data</p>
					{/await}
				</div>
			</div>
		{/if}
	</div>
</li>

<style>
	.result_item {
		padding: 10px;
		height: fit-content;
	}

	.title_wrapper {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		font-family: monospace;
	}

	.title_wrapper .index {
		color: var(--primary-text-color);
		font-size: 20px;
	}

	.title_wrapper .name_wrapper {
		display: flex;
		flex-flow: row nowrap;
		font-size: 20px;
		width: 400px;
	}

	.title_wrapper .name_wrapper p {
		font-family: monospace;
		font-size: 20px;
		color: var(--primary-text-color);
		margin: 0px 5px;
		padding-top: 3px;
	}

	.title_wrapper .name_wrapper a {
		text-decoration: none;
		font-family: cursive;
		color: var(--primary-color);
	}

	.time_wrapper {
		color: var(--primary-text-color);
		font-family: monospace;
		font-size: 20px;
		width: 150px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
	}

	.points_wrapper {
		color: green;
		font-family: monospace;
		font-size: 20px;
		margin-left: auto;
	}

	.more_info_wrapper {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		padding-top: 20px;
	}

	.box_wrapper {
		display: flex;
		flex-flow: column nowrap;
		width: 100%;
		overflow: hidden;
		padding: 10px;
		padding-top: 20px;
	}

	.info_container {
		display: flex;
		flex-flow: row nowrap;
		width: 100%;
	}

	.details {
		display: flex;
		flex-flow: column nowrap;
	}

	.detail_item {
		color: var(--primary-text-color);
		font-family: monospace;
		font-size: 16px;
		display: flex;
		flex-flow: row nowrap;
		margin: 10px 5px;
	}

	.detail_item .label {
		color: rgba(255, 255, 255, 0.5);
	}

	.detail_item .value {
		margin: 0px 5px;
	}

	.more_info_button {
		flex: 0 0 auto;
		color: var(--primary-color);
		font-family: monospace;
		font-size: 20px;
		padding: 5px 10px;
		border-radius: 10px;
		border: solid 1px var(--primary-color);
	}

	.more_info_button:hover {
		color: var(--primary-text-color);
		background-color: var(--primary-color);
	}

	.average_speed {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: solid 1px var(--primary-text-color);
		width: 120px;
		height: 120px;
		margin-left: 200px;
	}

	.average_speed:hover {
		border-color: var(--primary-color);
	}

	.average_speed .label {
		color: var(--primary-color);
		font-family: monospace;
		margin: 2px 0px;
	}

	.average_speed .value {
		color: var(--primary-text-color);
		font-family: monospace;
		margin: 2px 0px;
	}

	@media screen and (max-width: 700px) {
		.result_item {
			padding: 0px;
			margin: 10px 0px;
		}

		.name_wrapper {
			width: fit-content;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
		}

		.name_wrapper p,
		a {
			font-size: 14px;
			padding: 0px;
		}

		.more_info_wrapper {
			padding-top: 5px;
			padding-left: 5px;
			padding-right: 5px;
		}

		.time_wrapper {
			font-size: 12px;
			width: fit-content;
			margin: 0px 10px;
		}

		.points_wrapper {
			font-size: 12px;
		}

		.more_info_button {
			font-size: 14px;
			padding: 3px 6px;
			margin: 5px;
		}

		.detail_item {
			font-size: 12px;
		}

		.info_container {
			justify-content: space-between;
		}

		.average_speed {
			margin-left: 0px;
		}
	}
</style>
