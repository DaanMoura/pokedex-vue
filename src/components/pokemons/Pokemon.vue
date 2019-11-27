<template>
	<div id="pokemon">
		<div class="columns">
			<div class="column is-10">
				<h2>#{{ pokemon.id }} {{ pokemon.name }}</h2>
				<p>{{ pokemon.flavor_text }}</p>
			</div>
			<div class="is-2">
				<button v-if="!pokemonSaved" class="nes-btn" v-on:click="savePokemon">Favorite</button>
				<button v-if="pokemonSaved" class="nes-btn" v-on:click="removePokemon">Unfavorite</button>
			</div>
		</div>

		<div class="columns">
			<div class="column is-4-desktop is-12-tablet">
				<img v-if="pokemon.front_sprite" :src="pokemon.front_sprite" class="pokemon-img" />
				<img v-if="pokemon.back_sprite" :src="pokemon.back_sprite" class="pokemon-img" />

				<div class="nes-container with-title poke-container">
					<p class="title">Types</p>
					<ul>
						<li v-for="type in pokemon.types" v-bind:key="type">
							{{ type.name }}
						</li>
					</ul>
				</div>

				<div class="nes-container with-title poke-container">
					<p class="title">Abilities</p>
					<ul>
						<li v-for="ability in pokemon.abilities" v-bind:key="ability">
							{{ ability.name }}
						</li>
					</ul>
				</div>
			</div>

			<div class="column is-8-desktop is-12-tablet">
				<div class="nes-container with-title poke-container">
					<p class="title">Stats</p>
					HP {{ pokemon.stats.hp }}
					<progress class="nes-progress is-success" :value="pokemon.stats.hp" max="255" />
					Attack {{ pokemon.stats.attack }}
					<progress class="nes-progress is-error" :value="pokemon.stats.attack" max="190" />
					Defense {{ pokemon.stats.defense }}
					<progress class="nes-progress is-warning" :value="pokemon.stats.defense" max="230" />
					Special Attack {{ pokemon.stats.special_attack }}
					<progress class="nes-progress is-error" :value="pokemon.stats.special_attack" max="194" />
					Special Defense {{ pokemon.stats.special_defense }}
					<progress class="nes-progress is-warning" :value="pokemon.stats.special_defense" max="230" />
					Speed {{ pokemon.stats.speed }}
					<progress class="nes-progress is-primary" :value="pokemon.stats.speed" max="180" />
				</div>
			</div>
		</div>

		<div v-if="pokemon.evolution.length > 1" class="nes-container with-title">
			<p class="title">Evolution</p>
			<div class="columns is-vcentered is-centered is-vcentered">
				<div
					v-for="(p, index) in pokemon.evolution"
					v-bind:key="index"
					class="column is-3-desktop is-4-tablet is-12-mobile"
				>
					<a :href="`/pokemon/${p.name}`" class="link-pokemon">
						<img :src="p.img_url" /><br />
						{{ p.name }}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import fetchPokemon from './requests';

export default {
	data() {
		return {
			pokemon: {},
			pokemonSaved: false,
		};
	},

	methods: {
		savePokemon: function() {
			localStorage.setItem(
				this.pokemon.name,
				JSON.stringify({ id: this.pokemon.id, name: this.pokemon.name, img_url: this.pokemon.front_sprite })
			);
			this.pokemonSaved = true;
			const savedListJson = localStorage.getItem('saved_list');
			let savedList = JSON.parse(savedListJson);
			if (!savedList) savedList = [];
			savedList.push(this.pokemon.name);
			localStorage.setItem('saved_list', JSON.stringify(savedList));
		},
		removePokemon: function() {
			localStorage.removeItem(this.pokemon.name);
			this.pokemonSaved = false;
			const savedListJson = localStorage.getItem('saved_list');
			let savedList = JSON.parse(savedListJson);
			if (savedList) {
				savedList = savedList.filter(e => e != this.pokemon.name);
				localStorage.setItem('saved_list', JSON.stringify(savedList));
			}
		},
	},

	async mounted() {
		this.pokemon = await fetchPokemon(this.$route.params.id);
		this.pokemonSaved = localStorage.getItem(this.pokemon.name);
	},
};
</script>

<style>
.pokemon-img {
	margin: 1rem 2rem;
	transform: scale(2);
}

.poke-container {
	margin: 2rem 0;
}

.evolution-container {
	margin: 1rem 0;
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
