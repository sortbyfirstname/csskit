<script lang="ts">
	import StylesheetInput from '$lib/components/StylesheetInput.svelte';
	import type { Stylesheet } from '$lib/utils/types';
	import { getColors } from '$lib/utils/transformers';

	let stylesheets: Stylesheet[];
</script>

<svelte:head>
	<title>Rainbow | CSSkit</title>
</svelte:head>

<div class="z-10 min-h-screen w-full flex flex-col md:flex-row px-10 py-16 sm:p-20">
	<div class="card h-fit flex flex-col items-center bg-base-300 space-y-4 p-5 md:px-7 lg:px-10 sm:mr-4 sm:my-4">
		<div class="flex flex-col items-center space-y-3">
			<div class="flex justify-center">
				<div class="h-20 w-60 icon-rainbow" />
			</div>
			<div class="w-60 sm:w-[19.4rem] text-sm sm:text-base">
				<div class="chat chat-start">
					<div class="chat-bubble w-52">Rainbow is a tool to help you gain clarity in the colours used across your stylesheets.</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble w-52">Upload your CSS files to visualise your colour palette.</div>
				</div>
			</div>
		</div>
		<StylesheetInput bind:stylesheets />
	</div>

	<div class="divider divider-horizontal hidden md:flex md:mr-4" />
	<div class="divider divider-vertical flex md:hidden" />

	<div class="h-3/4 w-full md:w-1/3 flex-grow flex flex-col justify-between space-y-5">
		<div class="h-full w-full flex-grow">
			<div class="w-full grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 3xl:grid-cols-12 gap-x-1 sm:gap-x-4">
				{#if stylesheets}
					{#each getColors(stylesheets) as color}
						<div class="h-full w-full flex justify-center items-center">
							<div
								class="h-12 sm:h-16 xl:h-24 w-12 sm:w-16 xl:w-24 rounded-full shadow-lg m-1 sm:m-4 shrink-0 tooltip tooltip-primary tooltip-top"
								style={'background-color: ' + color.original}
								data-tip={color.original} />
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
