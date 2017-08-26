import Vue from "vue";
//import router from "../main";

export default Vue.component('item-nav', {
    template: `<ul>  
       <li v-for="item in items" v-on:click="navigate(item)">{{item}}</li>
    </ul>`,
    data: function () {
        return {
            items: ['Object', 'Array', 'Reflect', 'Proxy', 'Promise']
        }        
    },
    methods: {
        navigate: function(i){
           this.$router.push({ path: '/jsbrowser/' + i});
        }

    }

});

//<router-link v-for="i in items" v-bind:to="{path: 'jsbrowser',params: { userId: i }}" tag="li">{{i}}</router-link>