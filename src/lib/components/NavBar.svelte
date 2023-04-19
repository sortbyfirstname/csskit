<script>
	import { goto } from '$app/navigation';
</script>

<div class="z-50 absolute top-0 left-0 right-0 flex flex-row justify-between items-center">
	<button class="h-12 w-12 mx-3 mt-2 icon-primary icon-[csskit]" on:click={() => goto('/')} />
</div>
