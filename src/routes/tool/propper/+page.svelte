<script lang="ts">
	import CodeWindow from '$lib/components/CodeWindow.svelte';
	import StylesheetInput from '$lib/components/StylesheetInput.svelte';
	import type { Stylesheet } from '$lib/utils/types';

	let stylesheets: Stylesheet[];
</script>

<svelte:head>
	<title>Propper | CSSkit</title>
</svelte:head>

<div class="z-0 h-full w-full flex flex-row justify-between place-items-center p-20">
	<div class="h-3/4 w-1/3 card bg-base-300 place-items-center place-content-center space-y-4 p-10">
		<StylesheetInput bind:stylesheets />
	</div>

	<div class="divider divider-horizontal" />

	<div class="h-3/4 w-1/3 flex-grow flex flex-col justify-between space-y-5">
		<CodeWindow title="Input">
			{#if stylesheets}
				{#each stylesheets as stylesheet}
					{#each stylesheet.content.rules as rule}
						<pre><code class="text-purple-600">{rule.selector}</code></pre>
						{#each rule.attributes as attribute}
							<pre>&#9;<code class="text-cyan-500">{attribute.name}</code>: <code class="text-amber-500"
									>{attribute.value}</code></pre>
						{/each}
					{/each}
				{/each}
			{/if}
		</CodeWindow>
	</div>
</div>
