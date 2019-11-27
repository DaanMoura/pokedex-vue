<template>
  <div id="favorites">
      <h3 class="subtitle">Showing your favorites pokémons</h3>

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
  </div>
</template>

<script>
export default {
    data() {
        return {
            pokemons: [],
        }
    },

    mounted() {
        const savedPokemonsJson = localStorage.getItem('saved_list');
        const savedPokemons = JSON.parse(savedPokemonsJson);
        const _pokemons = savedPokemons.map(pokemon => {
            const pokemonJson = localStorage.getItem(pokemon);
            return JSON.parse(pokemonJson);
        });
        this.pokemons = _pokemons;
    }

}
</script>

<style>
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