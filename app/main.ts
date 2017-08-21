import Vue from "vue";
import VueRouter from "vue-router";
import details from "./components/details.vue";

// import UserView from './components/UserView.vue'


Vue.component('item-nav', {
    template: `<ul>
        <li v-for="i in items ">{{i}}</li>    
    </ul>`,
    data: function () {
        return {
            items: ['Object', 'Array', 'Reflect', 'Proxy', 'Promise']
        }
    }

});

Vue.use(VueRouter);
const routes = [
    { path: '/foo', component: details },
    
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