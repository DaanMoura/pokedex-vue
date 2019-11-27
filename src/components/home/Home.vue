<template>
	<div id="home">
		<div class="columns">
			<div class="column is-5-desktop is-12-tablet">
				<input type="text" class="nes-input" placeholder="Search for a pokémon" v-model="searchInput" />
				<!-- <input type="checkbox" class="nes-checkbox" />
				<span>Strict search</span> -->
			</div>
			<div class="column is-1-desktop is-12-tablet">
				<!-- <button v-on:click="strictSearch" class="nes-btn">Search</button> -->
				<a :href="`/pokemon/${searchInput}`" class="nes-btn">Search</a>
			</div>
			<div class="column is-4-desktop is-desktop"></div>
			<div class="column is-2-desktop">
				<a href="/favorites" class="nes-btn">Favorites</a>
			</div>
		</div>

		<h3 class="subtitle">Showing <b>all</b> pokémons</h3>

		<div class="columns is-multiline">
			<div
				class="column is-6-mobile is-4-tablet is-3-desktop"
				v-for="pokemon in pokemons"
				v-bind:key="pokemon.id"
			>
				<a :href="`/pokemon/${pokemon.name}`" class="link-pokemon">
					<div class="nes-container with-title is-centered">
						<p class="title">{{ pokemon.name }}</p>
						<img :src="pokemon.img_url" />
					</div>
				</a>
			</div>
		</div>

		<div class="row">
			<button v-if="page !== 0" v-on:click="pageBack" class="nes-btn">&lt;</button>
			{{ page + 1 }}
			<button v-if="page !== Math.ceil(807 / 20)" v-on:click="pageNext" class="nes-btn">></button>
		</div>
	</div>
</template>

<script>
import { fetchPokemons } from './requests';

export default {
	data() {
		return {
			pokemons: [],
            page: 0,
			searchInput: '',
		};
	},

	methods: {
		pageNext: function() {
            this.page = this.page + 1;
			this.loadPokemons();
		},
		pageBack: function() {
            this.page = this.page - 1;
            this.loadPokemons();
		},
		loadPokemons: async function() {
            this.pokemons = [];
			this.pokemons = await fetchPokemons(this.page);
		},
		strictSearch: function() {
			this.router.push({ path: `/pokemon/${this.searchInput}` });
		}
	},

	async created() {
		this.pokemons = await fetchPokemons(this.page);
	},
};
</script>

<style>
.row {
	padding-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.filter-button {
	text-transform: capitalize;
	margin-bottom: 1rem;
	width: 148px;
}

.subtitle {
	margin-top: 1rem;
}

.subtitle b {
	color: rgb(30, 79, 158);
}

.top button {
	margin-top: 8px;
	margin-right: 16px;
}

.pokemon-card {
	margin: 0.5rem;
}

.pokemons-container {
	padding-top: 1rem;
}
</style>
