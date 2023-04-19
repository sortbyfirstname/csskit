<script lang="ts">
	export let files: FileList;
	export let multiple: boolean = false;
	let disabled: boolean = false;
</script>

<input
	type="file"
	accept="text/css"
	class="file-input border-none w-fit shrink-0"
	bind:files
	on:change
	on:input={() => (disabled = true)}
	{disabled}
	{multiple} />
