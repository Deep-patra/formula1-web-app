<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error_wrapper">
	<p class="status">{$page.status}</p>
	<p class="error_message">{$page.error.message}</p>
</div>

<style>
	.error_wrapper {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}

	.status {
		color: var(--primary-text-color);
		font-size: 30px;
		font-family: cursive;
	}

	.error_message {
		color: rgba(255, 255, 255, 0.6);
		font-size: 20px;
		font-family: monospace;
	}
</style>
