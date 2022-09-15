<script lang="ts">
	export let label: string;
	export let value: string;
</script>

<div class="item_wrapper">
	<span class="label">{label}</span>
	<span class="value">{value}</span>
</div>

<style>
	.item_wrapper {
		border-radius: 10px;
		display: flex;
		flex-flow: row nowrap;
		width: fit-content;
		height: fit-content;
		padding: 5px 10px;
		font-family: monospace;
		font-size: 20px;
		color: var(--primary-text-color);
		border: solid 1px rgba(255, 255, 255, 0.4);
		margin: 10px;
	}

	.item_wrapper:hover {
		border: solid 1px var(--primary-text-color);
	}

	.item_wrapper:hover .label {
		color: var(--primary-text-color);
	}

	.label {
		margin-right: 10px;
		font-family: inherit;
		font-size: inherit;
		color: gray;
	}

	.value {
		font-family: inherit;
		font-size: inherit;
	}

	@media screen and (max-width: 600px) {
		.item_wrapper {
			font-size: 12px;
		}
	}
</style>
