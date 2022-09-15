<script lang="ts">
	export let text: string;
	export let time_date: { time: string; date: string };

	const convertTimeToIST = (time: string): string => {
		const timeArray: number[] = time.split(':').map((value) => parseInt(value));

		const UTCtime = new Date().setUTCHours(timeArray[0], timeArray[1], timeArray[2]);

		const ISTtime: Date = new Date(UTCtime);

		const time_string = ISTtime.toLocaleTimeString();

		return time_string;
	};
</script>

<div class="content_item glass">
	<div class="label_wrapper">
		<span>{text}</span>
	</div>

	<div class="time_date_wrapper">
		<div class="time_wrapper">
			<span class="icon" />
			<span class="content">{convertTimeToIST(time_date.time)}</span>
		</div>

		<div class="date_wrapper">
			<span class="icon" />
			<span class="content">{time_date.date}</span>
		</div>
	</div>
</div>

<style>
	.content_item {
		display: flex;
		flex-flow: row nowrap;
		padding: 20px;
		width: fit-content;
		font-family: monospace;
		border-radius: 10px;
		margin: 10px;
	}

	.label_wrapper {
		font-size: 28px;
		color: var(--primary-color);
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}

	.time_date_wrapper {
		display: flex;
		flex-flow: column nowrap;
		color: var(--primary-text-color);
		padding-left: 10px;
	}

	.time_wrapper,
	.date_wrapper {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		padding: 4px 8px;
	}

	@media screen and (max-width: 700px) {
		.content_item {
			padding: 10px;
		}

		.label_wrapper {
			font-size: 18px;
		}

		.time_date_wrapper {
			font-size: 12px;
		}
	}
</style>
