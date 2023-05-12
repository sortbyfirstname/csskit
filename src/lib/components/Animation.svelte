<script lang="ts">
	export let src: string;
    export let autoplay: boolean | undefined = undefined;
	export let loop: boolean | undefined = undefined;
	export let hover: boolean | undefined = undefined;
</script>

<svelte:head>
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>

<lottie-player {src} class={$$props.class} background="transparent" speed="1" {autoplay} {loop} {hover} />
