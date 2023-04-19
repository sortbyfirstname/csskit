<script lang="ts">
	export let files: FileList;
	export let multiple: boolean = false;
	let disabled: boolean = false;
</script>

<input
	type="file"
	accept="text/css"
	class="file-input w-[7.5rem] md:w-fit"
	bind:files
	on:change
	on:input={() => (disabled = true)}
	{disabled}
	{multiple} />
