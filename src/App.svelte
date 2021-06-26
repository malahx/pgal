<script lang="ts">
	import 'spectre.css/dist/spectre.min.css';
	import 'css.gg/icons/css/folder.css';
	import { Router, Route } from "svelte-routing";
	import Main from './routes/Main.svelte';
	import Gallery from './routes/Gallery.svelte';

	export let url = "";
</script>

<Router url="{url}">
	<div>
		<Route path="gallery/:id" component="{Gallery}"/>
		<Route path="/"><Main/></Route>
	</div>
</Router>