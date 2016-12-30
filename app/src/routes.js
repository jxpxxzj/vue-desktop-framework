import Index from './pages/index.vue';
import NotFound from './pages/notFound.vue';
import Page from './pages/page.vue';

export default [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/page',
        name: 'page',
        component: Page
    },
    {
        path: '*',
        name: 'notFound',
        component: NotFound
    }
];
