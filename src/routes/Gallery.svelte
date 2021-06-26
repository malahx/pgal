<script lang="ts">
	import { onMount } from 'svelte';
    import { Link } from "svelte-routing";
	import Folder from '../components/Folder.svelte';
	import { folders } from "../datastorage/folders.store";
	import { getFolder } from '../datastorage/pgal.api';

    export let id: string;

	onMount(() => getFolder({ id }));
</script>

<main>
	<div class="d-flex f-wrap">
		{#each $folders as content}
            <Folder {...content}/>
		{/each}
	</div>
</main>