<script lang="ts">
	import { init } from '../utils/background_canvas'
	import { onMount, onDestroy } from 'svelte'

	let model:HTMLDivElement;

	onMount(() => {
		const cleanup = init(model)

		return () => { cleanup(); } // cleans up the event listener
	})

</script>

<div class="grid">

	<div class="heading">
		<h1>Formula1-info</h1>

		<p>
			Get the latest and historic data about the formula 1 drivers, teams and circuits.<br />
			Compare the laptimes with graph of drivers with another drivers.
		</p>

		<a sveltekit:prefetch class="enter" href={`/seasons/${new Date().getFullYear()}/rounds`}>Enter</a>
	</div>

	<div 
		class="model" 
		bind:this={model}
	>
	</div>

</div>


<style>

	.grid {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 200px calc(100vh - 250px);
	}

	h1 {
		font-family: cursive;
		color: var(--primary-color);
		margin: 20px;
	}

	p {
		color: var(--primary-text-color);
		margin: 20px;
		font-family: monospace;
	}

	.enter {
		border: solid 1px var(--primary-color);
		color: var(--primary-color);
		padding: 5px 10px;
		text-decoration: none;
		margin: 20px;
		backdrop-filter: blur(10px);
		border-radius: 5px;
		font-family: monospace;
		font-size: 20px;
	}

	.enter:hover {
		background-color: var(--primary-color);
		color: #fff;
	}

	.model {
		width: 100%;
	}


	@media screen and (max-width: 750px) {
		h1 {
			text-align: center;
		}

		.enter {
			font-size: 12px;
		}
	}
</style>
