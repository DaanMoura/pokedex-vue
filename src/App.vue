<template>
	<div id="app" class="App">
		<a class="title" href="/">
			<section class="icon-list">
				<i class="nes-pokeball"></i>
			</section>
			<h1>Pokédex</h1>
		</a>

		<div class="nes-container is-rounded content">
			<router-view/>
		</div>

		<footer>
			Developed by <br />
			<a href="https://github.com/daanmoura">
					<i class="nes-icon github is-small"></i> DaanMoura
			</a>
		</footer>
	</div>
</template>

<script>
import 'nes.css/css/nes.css';
import 'bulma/css/bulma.css';

export default {
	name: 'app',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

body {
	font-family: 'Press Start 2P', cursive;
}

input {
	font-family: 'Press Start 2P', cursive;
}

button {
	font-family: 'Press Start 2P', cursive;
}

img {
	image-rendering: pixelated;
}

.App {
	display: flex;
	align-items: center;
	flex-flow: column;
}

.title {
	padding: 2rem 0;
	display: flex;
	flex-flow: row;
	color: #222;
}

.title:hover {
	color: #444;
	text-decoration: none;
}

.title h1 {
	padding: 1rem;
}

.image {
	height: 400px;

	image-rendering: pixelated;
	border: 2px solid black;
}

.content {
	width: 85%;
}

footer {
	padding: 2rem;
}

footer a {
	color: #333;
	text-decoration: none;
}

footer a:hover {
	color: #444;
	text-decoration: none;
}

.link-pokemon {
    color: #222;
    transition: 0.1s;
}

.link-pokemon:hover {
    color: #444;
    text-decoration: none;
    transition: 0.1s;
}

.link-pokemon img {
    transform: scale(1);
    transition: 0.2s;
}

.link-pokemon:hover img {
    transform: scale(2);
    transition: 0.2s;
}
</style>
