<script lang="ts">
	import FileInput from '$lib/components/FileInput.svelte';
	import { stylesheet } from '$lib/utils/parsers';
	import type { Stylesheet } from '$lib/utils/types';

	export let stylesheets: Stylesheet[] = [];
	let files: FileList;

	export const loadStylesheet = async (e: Event) => {
		const file = files[0];
		const { name, data } = { name: file.name, data: await file.text() };
		const res = stylesheet.safeParse({ name, content: data, raw: data });
		res.success ? console.log(res) : console.log(res.error);
		if (res.success) stylesheets = [...stylesheets, { name: res.data.name, content: res.data.content, raw: res.data.raw }];
	};
</script>

<div class="z-10 flex flex-col space-y-4">
	<FileInput bind:files on:change={loadStylesheet} />
	{#each stylesheets as _}
		<FileInput bind:files on:change={loadStylesheet} />
	{/each}
</div>
