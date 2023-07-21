import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import ListingPage from '@/views/ListingWithSearchBoxAndSort.vue';
import CountryDetail from '@/views/CountryDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: ListingPage },
        { path: '/country/:name', name: 'country', component: CountryDetail ,strict: true },
    ]
})


createApp(App)
.use(router)
.mount('#app')
