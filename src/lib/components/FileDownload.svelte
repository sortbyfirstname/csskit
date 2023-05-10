<script lang="ts">
	export let name: string;
	export let data: string;

	const handleDownload = (filename: string, content: string) => {
		const link = document.createElement('a');
		link.setAttribute('href', 'data:stylesheet/css;charset=utf-8,' + encodeURIComponent(content));
		link.setAttribute('download', filename);
		link.style.display = 'none';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
</script>

<button class="btn btn-primary" on:click={() => handleDownload(name, data)}>Download {name}</button>
