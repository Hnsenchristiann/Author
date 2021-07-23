<template>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <div class="p-1">
        <div class="container-all">
            <div class="all-item">
                <div class="grid grid-cols-2">
                    <div class="card-body">
                        <h5 class="card-title">{{author.name}}</h5>
                        <p class="card-text">$ {{author.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { ref } from 'vue'
    import Comic from "../apis/Comic";
    export default {
        name: 'author',
        data() {
            return {
                author: []
            };
        },
        mounted() {
            Comic.author().then(response => {
                this.author = response.data;
            })
        }
    }
</script>

<style>

</style>