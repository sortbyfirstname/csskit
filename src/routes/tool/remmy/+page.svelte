<script lang="ts">
	import CodeWindow from '$lib/components/CodeWindow.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import StylesheetInput from '$lib/components/StylesheetInput.svelte';
	import { decimal } from '$lib/utils/converters';
	import { getSizes, replaceSizes } from '$lib/utils/transformers';
	import type { Stylesheet } from '$lib/utils/types';

	let stylesheets: Stylesheet[];
	let rem: number = 16;
	let preview = false;
	let remOptions = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

	const handleDownload = (filename: string, content: string) => {
		const link = document.createElement('a');

		link.setAttribute('href', 'data:stylesheet/css;charset=utf-8,' + encodeURIComponent(content));
		link.setAttribute('download', filename || 'data.json');
		link.style.display = 'none';

		document.body.appendChild(link);

		link.click();

		document.body.removeChild(link);
	};
</script>

<svelte:head>
	<title>Remmy | CSSkit</title>
</svelte:head>

<div class="z-10 min-h-screen w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 px-10 py-16 sm:p-20">
	<div class="card h-fit flex flex-col items-center bg-base-300 space-y-4 p-5 md:px-7 lg:px-10">
		<div class="flex flex-col items-center space-y-3">
			<div class="flex justify-center">
				<div class="h-20 w-60 icon-remmy" />
			</div>
			<div class="w-60 sm:w-[19.4rem] text-sm sm:text-base">
				<div class="chat chat-start">
					<div class="chat-bubble w-52">Remmy is a tool to convert pixel and point values to rem values, to aid in the quest for responsiveness 👍</div>
				</div>
				<div class="chat chat-start">
					<div class="chat-bubble w-52">This is very much in beta, so please proceed with caution ⚠️</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble w-52">Upload your CSS files to get started.</div>
				</div>
			</div>
		</div>

		<div class="flex flex-row space-x-2 justify-center items-center tooltip tooltip-right" data-tip={decimal(rem * 0.75, 2) + 'pt' + (rem == 16 ? ' (default)' : '')}>
			<label for="rem-value" class="font-bold">1 rem =</label>
			<select id="rem-value" bind:value={rem} class="flex justify-center items-center py-0.5 px-1 border-4 border-accent">
				{#each remOptions as option}
					<option value={option}>{option}px</option>
				{/each}
			</select>
		</div>

		<StylesheetInput bind:stylesheets />
	</div>

	<Divider />

	<div class="w-full lg:w-1/3 max-h-60 lg:max-h-none flex flex-col justify-between space-y-5">
		<CodeWindow title="Conversions">
			{#if stylesheets}
				{#each getSizes(stylesheets, rem) as size}
					<pre>{size.original.value}{size.original.unit} -> {size.converted.value}{size.converted.unit}</pre>
				{/each}
			{/if}
		</CodeWindow>
	</div>

	<Divider />

	<div class="w-full lg:w-1/3 flex-grow flex flex-col justify-between space-y-5 mb-10 lg:mb-0">
		<CodeWindow title={preview ? 'Output' : ''}>
			<div class="absolute top-3 right-5 flex flex-row space-x-2 items-center">
				<label for="preview-toggle" class="label-text">Preview</label>
				<input id="preview-toggle" type="checkbox" class="toggle" bind:checked={preview} />
			</div>

			{#if stylesheets}
				{#each stylesheets as stylesheet}
					{#await replaceSizes(stylesheet.raw, getSizes([stylesheet], rem)) then output}
						{#if preview}
							<pre class="before:!mr-0 text-lg font-bold">{stylesheet.name}</pre>
							<pre class="before:!mr-0">---</pre>
							<pre class="before:!mr-0"><code>{output}</code></pre>
							<br />
						{:else}
							<div class="flex justify-center items-center my-5">
								<button class="btn btn-primary" on:click={() => handleDownload(stylesheet.name, output)}>
									Download {stylesheet.name}
								</button>
							</div>
						{/if}
					{/await}
				{/each}
			{/if}
		</CodeWindow>
	</div>
</div>
