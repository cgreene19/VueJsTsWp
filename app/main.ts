import Vue from "vue";
import VueRouter from "vue-router";
import aboutMe from "./components/aboutMe.vue";
import jsBrowser from "./components/jsBrowser.vue";
import itemNav from "./components/objectMenu";

Vue.use(VueRouter);
const routes = [
    {
        path: '/jsbrowser/:id', component: jsBrowser,
        children: [
            {
                path: 'profile',
                component: itemNav
            },]
    },
    { path: '/', component: jsBrowser },
    { path: '/aboutme', component: aboutMe },
];

const router = new VueRouter({
    routes 
});
 
const app = new Vue({
    el: '#app',
    router,
    data: {
        laung: 'js'
    }
}).$mount();