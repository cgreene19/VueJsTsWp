import Vue from "vue";
import VueRouter from "vue-router";
import aboutMe from "./components/aboutMe.vue";
import jsBrowser from "./components/jsBrowser.vue";
import itemNav from "./components/objectMenu";

// import UserView from './components/UserView.vue'


// const itemNav = Vue.component('item-nav', {
//     template: `<ul>
//         <li v-for="i in items ">{{i}}</li>    
//     </ul>`,
//     data: function () {
//         return {
//             items: ['Object', 'Array', 'Reflect', 'Proxy', 'Promise']
//         }
//     }

// });

Vue.use(VueRouter);
const routes = [
    {
        path: '/jsbrowser', component: jsBrowser,
        children: [
            {
                path: 'profile',
                component: itemNav
            },]
    },
    { path: '/', component: jsBrowser },
    { path: '/aboutme', component: aboutMe },

]

const router = new VueRouter({
    routes // short for `routes: routes`
});

//   const app = new Vue({
//     el: '#app',
//     data: {
//         laung: 'js'
//     }
// });

const app = new Vue({
    el: '#app',
    router,
    data: {
        laung: 'js'
    }
}).$mount();