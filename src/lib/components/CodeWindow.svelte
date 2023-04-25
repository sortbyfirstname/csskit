<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<div class="mockup-code h-1/3 w-full flex-grow bg-base-300 text-base-content">
	{#if title}
		<span class="absolute top-4 left-24 text-base-content/50 select-none text-[0.75rem]">{title}</span>
	{/if}
	<div class="h-full overflow-y-auto overflow-x-hidden -mt-2">
		<div class="px-4 sm:px-16 pt-4 pb-16">
			<slot />
		</div>
	</div>
</div>
