<script lang="ts">
	import CodeWindow from '$lib/components/CodeWindow.svelte';
	import FileInput from '$lib/components/FileInput.svelte';
	import { colorsOnly, processStylesheet } from '$lib/utils/text';
	import type { Color, Rule, Stylesheet } from '$lib/utils/types';

	$: processing = false;
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
	<title>Propper | CSSkit</title>
</svelte:head>

{#if processing}
	<div
		class="z-50 absolute inset-0 bg-black/10 flex justify-center items-center cursor-default"
		on:click|stopPropagation
		on:keydown|stopPropagation>
		<div class="select-none">Loading...</div>
	</div>
{/if}

<div class="z-0 h-full w-full flex flex-row justify-between place-items-center p-20">
	<div class="h-3/4 w-1/3 card bg-base-300 place-items-center place-content-center space-y-4 p-10">
		<FileInput bind:files on:change={loadStylesheet} />
		{#each stylesheets as _}
			<FileInput bind:files on:change={loadStylesheet} />
		{/each}
	</div>

	<div class="divider divider-horizontal" />

	<div class="h-3/4 w-1/3 flex-grow flex flex-col justify-between space-y-5">
		<CodeWindow title="Input">
			{#if stylesheets}
				{#each stylesheets as stylesheet}
					{#each stylesheet.rules as rule}
						<pre><code>{rule.selector}</code></pre>
						{#each rule.attributes as attribute}
							<pre>&#9;<code>{attribute.name}: {attribute.value}</code></pre>
						{/each}
					{/each}
				{/each}
			{/if}
		</CodeWindow>
		<CodeWindow>
			{#if colors}
				{#each [...new Set(colors.map((c) => c.value))].sort() as color}
					<pre><code>{color}</code></pre>
				{/each}
			{/if}
		</CodeWindow>
	</div>
</div>
