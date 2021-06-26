<script lang="ts">
    import { Link } from "svelte-routing";

    export let id: string;   
    export let img: string;
    export let alt: string;
    export let icon: string = null;
    export let loaded: boolean = null;
</script>

<div class="c-hand p-relative m-1 folder">
    <Link to="gallery/{id}">
        <img src="{img}" 
            class="img-responsive"
            alt="{alt}"
            class:loading={!loaded}
            on:load={() => loaded = true}/>
        <div class="loading-lg p-absolute loader" 
            class:d-invisible={loaded !== false}/>
        {#if icon}<i class="{icon} p-absolute text-gray i-folder"/>{/if}
    </Link>
</div>

<style>
    .folder {
        border: 1px rgb(52, 170, 52) solid;
        border-radius: 1px;
    }
    .loader {
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
    }
    .i-folder {
        bottom: 10px;
        right: 10px;
    }
</style>