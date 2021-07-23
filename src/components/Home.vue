<template>
    <div>
        <div class="card-body" v-if="user">
            <h3>Hello, {{user.name}}</h3>
            <span>{{user.email}}</span>
        </div>
    </div>
</template>

<script>
import User from "../apis/User";
import {ref} from 'vue'
export default{
    name: 'home',
        data() {
            return {
                user: null
            };
        },

        mounted() {
            User.auth().then(response => {
                this.user = response.data;
            })
        }
}
</script>

<style lang="postcss">

</style>