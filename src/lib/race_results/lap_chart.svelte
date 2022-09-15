<script lang="ts">
	import { onMount } from 'svelte';
	import { initConfig } from '../../utils/lap_chart';
	import { Chart, registerables, type ChartConfiguration } from 'chart.js';

	export let laps: any;

	let canvas: HTMLCanvasElement;

	onMount(() => {
		Chart.register(...registerables);

		const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
		const chart = new Chart(ctx, initConfig(laps) as any);
	});
</script>

<canvas bind:this={canvas}> Your browser doesnt support canvas api </canvas>

<style>
	canvas {
		width: 100%;
		height: 100%;
		margin: 10px;
	}

	@media screen and (max-width: 700px) {
		canvas {
			margin: 0px;
		}
	}
</style>
