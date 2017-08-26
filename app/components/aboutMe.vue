<template>
    <div>
        <div>
            <h2>
                {{msg}}
                
            </h2>
        </div>
      
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({

    data() {
        return {
            msg: "aboutme!"
        }

    }
});
// Vue.component("UserProfile", {

// });
</script>
<style></style>