<script lang="ts">
</script>

<div class="button_wrapper">
	<slot />
</div>

<style>
	.button_wrapper {
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		padding: 10px;
		padding-left: 20px;
		align-items: center;
		border-bottom: solid 1px var(--primary-text-color);
		padding-bottom: 20px;
	}

	@media screen and (max-width: 750px) {
		.button_wrapper {
			padding: 5px;
			padding-bottom: 10px;
		}
	}
</style>
