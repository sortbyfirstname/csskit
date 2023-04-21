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
	<div class="relative tooltip select-none" data-tip="Propper">
		<div class="absolute -rotate-12 left-1 top-5 bg-teal-400 text-white font-mono whitespace-nowrap px-3">
			COMING SOON
		</div>
		<button class="btn btn-primary btn-lg" on:click={() => goto('/propper')} disabled>Propper</button>
	</div>
	<button class="btn btn-primary btn-lg" on:click={() => goto('/rainbow')}>Rainbow</button>
</div>

<div class="absolute bottom-0 left-0 right-0 flex flex-row justify-center items-center">
	<span>© 2023 Aaron Seabrook</span>
</div>
