<script lang="ts">
	import CodeWindow from '$lib/components/CodeWindow.svelte';
	import StylesheetInput from '$lib/components/StylesheetInput.svelte';
	import type { Stylesheet } from '$lib/utils/types';

	let stylesheets: Stylesheet[];
</script>

<svelte:head>
	<title>Contextless Comments | CSSkit</title>
</svelte:head>

<div class="z-10 h-full w-full flex flex-col md:flex-row px-10 py-16 sm:p-20">
	<div class="card h-fit flex flex-col items-center bg-base-300 space-y-4 p-5 md:px-7 lg:px-10">
		<div class="flex flex-col items-center space-y-3">
			<div class="flex justify-center">
				<div class="h-20 w-60 icon-coco" />
			</div>
			<div class="w-60 sm:w-[19.4rem] text-sm sm:text-base">
				<div class="chat chat-start">
					<div class="chat-bubble w-52">CoCo is a tool that gets you all comments found in your stylesheets.</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble w-52">Upload your CSS files to see your comments.</div>
				</div>
			</div>
		</div>
		<StylesheetInput bind:stylesheets />
	</div>

	<div class="divider divider-horizontal hidden md:flex md:mr-4" />
	<div class="divider divider-vertical flex md:hidden" />

	<div class="h-full w-full sm:w-1/3 flex-grow flex flex-col justify-between space-y-5">
		<CodeWindow>
			{#if stylesheets}
				{#each stylesheets as stylesheet}
					{#each stylesheet.content.comments as comment}
						<pre class="before:!mr-0"><code>{comment}</code></pre>
					{/each}
				{/each}
				{#if stylesheets.reduce((a, b) => a + b.content.comments.length, 0) > 0}
					<div class="absolute bottom-0 right-6 text-xl bg-accent text-accent-content py-1 px-3 shadow-lg rounded-t-md">
						<span>Total: {stylesheets.reduce((a, b) => a + b.content.comments.length, 0)}</span>
					</div>
				{/if}
			{/if}
		</CodeWindow>
	</div>
</div>
