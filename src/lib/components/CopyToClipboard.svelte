<script lang="ts">
	export let text: string;
	export let alert: boolean = false;

	const copy = async (e: Event) => {
		navigator.clipboard.writeText(text);
		alert = true;
		await setTimeout(() => {
			alert = false;
		}, 5000);
	};
</script>

<button on:click={copy}>
	<slot />
</button>
