import Vue from 'vue';
import VueRouter from 'vue-router';
import ListingWithSearchBoxAndSort from '@/views/ListingWithSearchBoxAndSort.vue';
import CountryDetail from '@/views/CountryDetail.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'ListingWithSearchBoxAndSort', component: ListingWithSearchBoxAndSort},
]


const router = new VueRouter({
    history: createWebHistory(),
    routes,
});

export default router;