<script lang="ts">
	export let src: string;
	export let loop: boolean = false;
    export let autoplay: boolean = false;
	export let hover: boolean = false;
</script>

<svelte:head>
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>

<lottie-player {src} class={$$props.class} background="transparent" speed="1" {loop} {autoplay} {hover}  />
