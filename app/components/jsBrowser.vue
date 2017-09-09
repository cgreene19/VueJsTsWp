<template>
    <div>
        <div>
            <h2>
                {{msg}}
                {{ $route.params.id }}
            </h2>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({

    data() {
        return {
            msg: "This is the JS BROWSER!"
        }

    }
});

</script>
<style></style>