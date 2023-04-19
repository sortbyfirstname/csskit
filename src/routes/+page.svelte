<script>
	import { goto } from '$app/navigation';
</script>

<div class="h-full w-full flex flex-col justify-between items-center">
	<div class="h-40 md:h-52 xl:h-60 w-40 md:w-52 xl:w-60 icon-csskit bg-center" />

	<div class="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 mt-20 sm:mt-0">
		<div class="relative tooltip select-none" data-tip="Propper">
			<div
				class="absolute -rotate-12 -left-[9px] top-[18px] bg-teal-400 text-white text-xl font-mono whitespace-nowrap px-3">
				COMING SOON
			</div>
			<button class="btn btn-primary btn-lg" on:click={() => goto('/propper')} disabled>Propper</button>
		</div>
		<button class="btn btn-primary btn-lg" on:click={() => goto('/rainbow')}>Rainbow</button>
	</div>

	<span> © 2023 Aaron Seabrook </span>
</div>
