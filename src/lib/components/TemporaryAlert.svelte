<script lang="ts">
	import { fly } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';

	export let alert: boolean = false;
</script>

{#if alert}
	<div
		transition:fly={{ duration: 1800, easing: elasticInOut, y: '-4rem' }}
		class="z-50 absolute top-3 toast-center w-fit alert !bg-accent text-accent-content drop-shadow-lg flex flex-row justify-center items-center">
		<slot />
	</div>
{/if}
