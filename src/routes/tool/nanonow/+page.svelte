<script lang="ts">
	import Animation from '$lib/components/Animation.svelte';
	import CodeWindow from '$lib/components/CodeWindow.svelte';
	import CopyToClipboard from '$lib/components/CopyToClipboard.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import FileDownload from '$lib/components/FileDownload.svelte';
	import StylesheetInput from '$lib/components/StylesheetInput.svelte';
	import TemporaryAlert from '$lib/components/TemporaryAlert.svelte';
	import type { Stylesheet } from '$lib/utils/types';

	let stylesheets: Stylesheet[];
	let alert = false;

	async function minify(input: string) {
		const res = await fetch('/api/cssnano', {
			method: 'POST',
			body: JSON.stringify(input)
		});

		return await res.json();
	}
</script>

<TemporaryAlert bind:alert>
	<Animation src="/lottie/copy-white.json" class="h-6 w-6" loop autoplay />
	<span class="!mt-0">Copied to clipboard</span>
</TemporaryAlert>

<div class="z-10 h-full w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 px-10 py-16 sm:p-20">
	<div class="card h-fit flex flex-col items-center bg-base-300 space-y-4 p-5 md:px-7 lg:px-10">
		<div class="flex flex-col items-center space-y-3">
			<div class="flex justify-center">
				<div class="h-20 w-60 icon-nanonow" />
			</div>
			<div class="w-60 sm:w-[19.4rem] text-sm sm:text-base">
				<div class="chat chat-start">
					<div class="chat-bubble w-52">nanonow is a tool which minifies your CSS based on preset config using postcss + cssnano.</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble w-52">Upload your CSS files to get started.</div>
				</div>
			</div>
		</div>

		<StylesheetInput bind:stylesheets />
	</div>

	<Divider />

	<div class="w-full lg:w-1/3 flex-grow flex flex-col justify-between space-y-5">
		<CodeWindow title="Minified">
			{#if stylesheets}
				{#await minify(stylesheets.flatMap((s) => s.raw).join('\r\n')) then css}
					{#if css.length > 0}
						<div class="absolute top-3 right-5 space-x-3">
							<CopyToClipboard text={css} bind:alert>
								<Animation src="/lottie/copy.json" class="h-6 w-6" hover />
							</CopyToClipboard>
							<FileDownload name="minified.css" data={css}>
								<Animation src="/lottie/download.json" class="h-6 w-6" hover slot="custom" />
							</FileDownload>
						</div>
						<pre class="before:!mr-0 whitespace-pre-wrap"><code>{css}</code></pre>
					{/if}
				{/await}
			{/if}
		</CodeWindow>
	</div>
</div>
