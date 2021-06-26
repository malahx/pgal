<script lang="ts">
	import { onMount } from 'svelte';
	import Folder from '../components/Folder.svelte';
	import { folders } from "../datastorage/folders.store";
	import { getFolders } from '../datastorage/pgal.api';

	onMount(() => getFolders());
</script>

<main>
	<div class="d-flex f-wrap">
		{#each $folders as content}
			<div class="subfolder">
				<Folder {...content} icon="gg-folder"/>
			</div>
		{/each}
	</div>
</main>

<style>
	.subfolder {
		max-width: 16.66%;
	}
	@media screen and (min-width: 900px) and (max-width: 1280px) {
		.subfolder {
			max-width: 25%;
		}
	}
	@media screen and (min-width: 600px) and (max-width: 900px) {
		.subfolder {
			max-width: 33.33%;
		}
	}
	@media screen and (min-width: 400px) and (max-width: 600px) {
		.subfolder {
			max-width: 50%;
		}
	}
	@media screen and (max-width: 400px) {
		.subfolder {
			max-width: 100%;
		}
	}
</style>