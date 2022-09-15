<script lang="ts">
	import InfoItem from './info_item.svelte';
	import { scale } from '../../utils/scale.transition';

	export let driver: Drivers;
	export let index: number;

	const { position, points, wins, Driver, Constructors } = driver;

	const { permanentNumber, code, url, givenName, familyName, dateOfBirth, nationality } = Driver;

	const { name } = Constructors[0];
</script>

<li transition:scale={{ delay: index * 50 }}>
	<div class="driver_item">
		<div class="title_wrapper">
			<span class="position_wrapper">{position}.</span>
			<span class="name_wrapper">
				<a href={url}>
					{`#${permanentNumber} ${givenName} ${familyName} (${name})`}
				</a>
			</span>
			<span class="code_wrapper">{code}</span>
			<span class="points_wrapper">
				<p>Points</p>
				<p class="points">{points}</p>
			</span>
		</div>

		<div class="extra_wrapper">
			<InfoItem label="Wins" value={wins} />
			<InfoItem label="Dob" value={dateOfBirth} />
			<InfoItem label="Nationality" value={nationality} />
		</div>
	</div>
</li>

<style>
	.driver_item {
		display: flex;
		flex-flow: column nowrap;
		padding: 20px 20px;
		border-bottom: solid 2px gray;
	}

	.code_wrapper {
		margin: 0px 10px;
	}

	.title_wrapper {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		font-size: 20px;
		color: var(--primary-text-color);
		font-family: monospace;
	}

	.points_wrapper {
		display: flex;
		flex-flow: row nowrap;
		margin-left: auto;
	}

	.points {
		color: var(--primary-color);
		margin-left: 10%;
	}

	.name_wrapper {
		color: var(--primary-color);
		font-size: 24px;
		font-family: cursive;
		width: 500px;
		margin: 0px 10px;
	}

	.name_wrapper a {
		text-decoration: none;
		font-size: inherit;
		font-size: inherit;
		color: inherit;
	}

	.name_wrapper a:hover {
		text-decoration: underline;
	}

	.extra_wrapper {
		display: flex;
		flex-flow: row wrap;
		padding-top: 20px;
	}

	@media screen and (max-width: 800px) {
		.name_wrapper {
			width: 300px;
			font-size: 18px;
		}
	}

	@media screen and (max-width: 600px) {
		.name_wrapper {
			width: 150px;
			font-size: 14px;
		}

		.code_wrapper {
			font-size: 12px;
		}

		.points_wrapper {
			font-size: 12px;
		}
	}
</style>
