<!-- app/components/details.vue -->
<template>
    <div>
        <h2>{{msg}}</h2>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
   
    data() {
        return {
            msg: "This is the about me!"
        }

    }
});

</script>
<style></style>