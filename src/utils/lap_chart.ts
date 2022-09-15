import type { ChartConfiguration } from 'chart.js';

function getTimeInMs(time: string) {
	const [minutes, seconds] = time.split(':').map((value) => parseFloat(value));

	const ms = minutes * (60 * 60 * 1000) + seconds * 1000;

	return ms;
}

export function initConfig(laps: any[]): ChartConfiguration {
	const data: any = [];
	const labels: number[] = [];
	let total_ms = 0;

	Object.values(laps).forEach((lap: any) => {
		const { number, Timings } = lap;
		const { time, position } = Timings[0];

		labels.push(parseInt(number));

		const time_in_ms = getTimeInMs(time);

		total_ms += time_in_ms;

		const _lap = { lap: parseInt(number), position: parseInt(position), time: total_ms };

		data.push(_lap);
	});

	const config: ChartConfiguration = {
		type: 'line',
		data: {
			labels: labels,
			datasets: [
				{
					label: 'Time',
					data: data as any,
					borderColor: 'gray',
					parsing: {
						xAxisKey: 'lap',
						yAxisKey: 'time'
					}
				},
				{
					label: 'Position',
					data: data as any,
					borderColor: 'blue',
					parsing: {
						xAxisKey: 'lap',
						yAxisKey: 'position'
					}
				}
			]
		},
		options: {
			responsive: true,
			interaction: {
				mode: 'nearest'
			},

			scales: {
				y: {
					display: false
				},
				x: {
					title: {
						display: true,
						text: 'Laps'
					}
				}
			}
		}
	};

	return config;
}
