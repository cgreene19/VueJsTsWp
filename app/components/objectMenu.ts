import Vue from "vue";

export default Vue.component('item-nav', {
    template: `<ul>
        <li v-for="i in items ">{{i}}</li>    
    </ul>`,
    data: function () {
        return {
            items: ['Object', 'Array', 'Reflect', 'Proxy', 'Promise']
        }
    }

});