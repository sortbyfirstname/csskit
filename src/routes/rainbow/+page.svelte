<script lang="ts">
	import FileInput from '$lib/components/FileInput.svelte';
	import { colorsOnly, processStylesheet } from '$lib/utils/text';
	import type { Color, Rule, Stylesheet } from '$lib/utils/types';

	let files: FileList;
	let stylesheets: Stylesheet[] = [];
	let colors: Color[] = [];

	export const loadStylesheet = async (e: Event) => {
		const file = await files[0];
		const { name, data } = { name: file.name, data: await file.text() };
		const rules: Rule[] = processStylesheet(data);

		stylesheets = [...stylesheets, { name, rules }];

		colors = [...colors, ...colorsOnly(stylesheets)];
	};
</script>

<svelte:head>
	<title>Rainbow | CSSkit</title>
</svelte:head>

<div class="z-10 h-full w-full flex flex-col sm:flex-row justify-between place-items-center p-10 sm:p-20">
	<div class="z-10 h-3/4 card bg-base-300 place-items-center place-content-center space-y-4 px-5 md:px-7 lg:px-10 mr-4">
		<FileInput bind:files on:change={loadStylesheet} />
		{#each stylesheets as _}
			<FileInput bind:files on:change={loadStylesheet} />
		{/each}
	</div>

	<div class="divider divider-horizontal hidden sm:flex" />
	<div class="divider divider-vertical flex sm:hidden" />

	<div class="h-3/4 w-full sm:w-1/3 flex-grow flex flex-col justify-between space-y-5">
		<div class="h-full w-full flex-grow">
			<div class="w-full grid grid-cols-4 sm:grid-cols-12 gap-x-4 sm:-mt-4">
				{#if colors}
					{#each [...new Set(colors.map((c) => c.value))].sort() as color}
						<div class="h-24 w-24 rounded-full shadow-lg m-4" style={'background-color: ' + color} title={color} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
