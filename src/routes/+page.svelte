<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>CSSkit</title>
</svelte:head>

<div class="absolute top-3 md:top-5 xl:top-10 left-0 right-0 flex flex-row justify-center items-center max-h-[30vh]">
	<div class="h-40 md:h-52 xl:h-60 w-40 md:w-52 xl:w-60 icon-csskit bg-center" />
</div>

<div class="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 mt-20">
	<div class="tooltip" data-tip="get comments from your stylesheets">
		<button class="btn btn-primary btn-lg" on:click={() => goto('/tool/coco')}>CoCo</button>
	</div>

	<div class="tooltip" data-tip="minify your css">
		<button class="btn btn-primary btn-lg" on:click={() => goto('/tool/nanonow')}>na▪no▪now</button>
	</div>

	<div class="relative tooltip select-none" data-tip="wrap your colours in custom properties">
		<div class="w-full absolute -rotate-12 top-1/3 bg-teal-400 text-white font-mono whitespace-nowrap px-3">COMING SOON</div>
		<button class="btn btn-primary btn-lg" on:click={() => goto('/tool/propper')} disabled>Propper</button>
	</div>

	<div class="tooltip" data-tip="visualise the colours in your stylesheets">
		<button class="btn btn-primary btn-lg" on:click={() => goto('/tool/rainbow')}>Rainbow</button>
	</div>

	<div class="tooltip" data-tip="convert your pixels and points to rems">
		<button class="btn btn-primary btn-lg" on:click={() => goto('/tool/remmy')}>Remmy</button>
	</div>
</div>

<div class="absolute bottom-0 left-0 right-0 flex flex-row justify-center items-center">
	<span>© 2023 Aaron Seabrook | <a href="https://github.com/sortbyfirstname/csskit" target="_blank" class="link link-accent">View project on GitHub</a></span>
</div>
