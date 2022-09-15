<script lang="ts">
	export let team: Team;

	const { position, points, wins, Constructor } = team;

	const { name, nationality, url } = Constructor;
</script>

<li>
	<div class="constructor_item">
		<span class="name_wrapper">
			<p class="index">{position}.</p>
			<a href={url} class="name">{`${name} (${nationality})`}</a>
		</span>

		<span class="wins_wrapper">
			<p>Wins</p>
			<p class="wins">{wins}</p>
		</span>

		<span class="points_wrapper">
			<p>points</p>
			<p class="points">{points}</p>
		</span>
	</div>
</li>

<style>
	.constructor_item {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		padding: 20px 10px;
		border-bottom: solid 2px gray;
	}

	.name_wrapper {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		width: 400px;
	}

	.name_wrapper .index {
		font-size: 20px;
		font-family: monospace;
		color: var(--primary-text-color);
		margin-right: 10px;
	}

	.name_wrapper .name {
		font-size: 24px;
		font-family: cursive;
		text-decoration: none;
		color: var(--primary-color);
	}

	.wins_wrapper {
		font-family: monospace;
		font-size: 20px;
		display: flex;
		flex-flow: row nowrap;
	}

	.wins_wrapper p {
		margin: 0px 5px;
		color: gray;
	}

	.wins_wrapper .wins {
		color: var(--primary-text-color);
	}

	.points_wrapper {
		font-size: 20px;
		display: flex;
		flex-flow: row nowrap;
		margin-left: auto;
		font-family: monospace;
	}

	.points_wrapper p {
		margin: 0px 5px;
		color: gray;
	}

	.points_wrapper .points {
		color: var(--primary-text-color);
	}

	@media screen and (max-width: 700px) {
		.name_wrapper {
			width: 200px;
		}

		.name_wrapper .name {
			font-size: 14px;
		}

		.wins_wrapper {
			font-size: 12px;
		}

		.points_wrapper {
			font-size: 12px;
		}
	}
</style>
