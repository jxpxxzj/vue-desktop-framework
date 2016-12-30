// Vue core
import Vue from 'vue';

// Official plugins
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

// UI library
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'normalize.css';
Vue.use(ElementUI);

// Project plugins and library scripts
import App from './App.vue';
import VueElectron from './plugins/vue-electron.js';
Vue.component(App);
Vue.use(VueElectron);

// Routes
import Routes from './routes.js';
var router = new VueRouter({
    routes: Routes
});

// Vuex store
import Store from './store.js';
var store = new Vuex.Store(Store);
import { sync } from 'vuex-router-sync';
sync(store, router);

// Entry point
var Entry = new Vue({
    router, store
});
Entry.$mount('#app');
