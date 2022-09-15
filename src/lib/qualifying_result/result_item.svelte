<script lang="ts">
	import { scale } from '../../utils/scale.transition';

	export let result;
	export let index: number;

	const { number, position, Driver, Constructor, Q1, Q2, Q3 } = result;

	const { familyName, givenName, url, code } = Driver;

	const sectors: Record<string, string> = {};
	sectors.Q1 = Q1;
	sectors.Q2 = Q2;
	sectors.Q3 = Q3;
</script>

<li transition:scale={{ delay: index * 50 }}>
	<div class="title_wrapper">
		<span class="index">{position}.</span>

		<span class="name_wrapper">
			<p class="number">#{number}</p>
			<a href={url} class="name">
				{givenName}
				{familyName}
			</a>
			<a href={Constructor.url} class="constructor">
				({Constructor.name})
			</a>
		</span>

		<span class="code">{code}</span>
	</div>

	<div class="sector_time">
		{#each Object.keys(sectors) as key}
			<div class="sector_item">
				<span class="label">{key}</span>
				<span class="value">{sectors[key]}</span>
			</div>
		{/each}
	</div>
</li>

<style>
	li {
		display: flex;
		flex-flow: column nowrap;
		padding: 20px 10px;
		width: 100%;
	}

	.title_wrapper {
		display: flex;
		flex-flow: row nowrap;
		width: 100%;
		font-size: 20px;
		font-family: monospace;
		color: var(--primary-text-color);
	}

	.index {
		font-size: 24px;
		color: var(--primary-text-color);
		padding-top: 3px;
	}

	.name_wrapper {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		margin: 0px 10px;
	}

	.number {
		padding: 0px 4px;
		font-size: 24px;
	}

	.name {
		padding: 0px 4px;
		color: var(--primary-color);
		font-family: cursive;
		text-decoration: none;
		font-size: 24px;
	}

	.constructor {
		padding: 0px 4px;
		color: var(--primary-color);
		font-family: cursive;
		text-decoration: none;
		font-size: 24px;
	}

	.code {
		margin-left: auto;
		font-size: 24px;
	}

	.sector_time {
		display: flex;
		flex-flow: row nowrap;
		padding: 10px;
	}

	.sector_item {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		border: solid 1px rgba(255, 255, 255, 0.4);
		margin: 0px 10px;
		padding: 8px 16px;
		border-radius: 10px;
	}

	.sector_item:hover,
	.sector_item:hover .label {
		border-color: var(--primary-text-color);
	}

	.label {
		color: rgba(255, 255, 255, 0.4);
		font-family: monospace;
		font-size: 20px;
		padding: 0px 5px;
	}

	.value {
		color: var(--primary-text-color);
		font-family: monospace;
		font-size: 20px;
		padding: 0px 5px;
	}

	@media screen and (max-width: 700px) {
		.index {
			font-size: 16px;
		}

		.number {
			font-size: 14px;
		}

		.name {
			font-size: 14px;
		}

		.constructor {
			font-size: 14px;
		}

		.code {
			font-size: 14px;
		}

		.sector_time {
			padding: 10px 0px;
		}

		.sector_item {
			padding: 2px 4px;
			margin: 0px 4px;
			border-radius: 6px;
		}

		.sector_item .label,
		.sector_item .value {
			font-size: 14px;
		}
	}
</style>
