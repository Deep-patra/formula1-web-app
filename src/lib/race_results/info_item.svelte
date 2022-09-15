<script lang="ts">
	export let label: string;
	export let value: string;

	if (value === undefined) value = '-- --';
</script>

<div class="info_wrapper">
	<span class="label">{label}</span>
	<span class="value">{value}</span>
</div>

<style>
	.info_wrapper {
		font-family: monospace;
		font-size: 20px;
		padding: 5px 10px;
		margin: 10px;
		border-radius: 10px;
		border: solid 1px rgba(255, 255, 255, 0.4);
		width: fit-content;
		height: fit-content;
	}

	.info_wrapper:hover {
		border-color: var(--primary-text-color);
	}

	.label {
		color: rgba(255, 255, 255, 0.4);
		font-family: inherit;
		font-size: inherit;
	}

	.value {
		color: var(--primary-text-color);
		font-family: inherit;
		font-size: inherit;
	}

	@media screen and (max-width: 700px) {
		.info_wrapper {
			font-size: 12px;
			margin: 5px;
		}
	}
</style>
