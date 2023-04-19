<script>
	import { goto } from '$app/navigation';
</script>

<div class="absolute top-5 left-0 right-0 flex flex-row justify-center items-center max-h-[30vh]">
	<img src="csskit.svg" class="h-60 w-60 max-h-[30vh]" alt="CSS Kit logo" />
</div>

<div class="flex flex-row space-x-8">
	<div class="relative">
		<div class="absolute -rotate-12 -left-3 top-3 bg-teal-400 text-white font-mono whitespace-nowrap px-3">
			COMING SOON
		</div>
		<button class="btn btn-primary" on:click={() => goto('/propper')} disabled>Propper</button>
	</div>
	<button class="btn btn-primary" on:click={() => goto('/rainbow')}>Rainbow</button>
</div>
