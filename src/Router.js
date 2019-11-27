import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Pokemon from './components/pokemons/Pokemon.vue';
import Favorites from './components/favorites/Favorites.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:[
        {path: '/', name:'home', component: Home, strict: true},
        {path: '/pokemon/:id', name:'pokemon', component: Pokemon},
        {path: '/favorites', name:'favorites', component: Favorites}
    ]
})
