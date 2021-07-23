<template>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <div class="p-1">
        <div class="container-all">
            <div class="search">
                <input type="text" v-model="nama" />
            </div>

            <div class="all-item">
                <div class="grid grid-cols-2">
                    <div v-for="item in books" :key="item.id">
                        <img :src="item.cover_url" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{{item.title}}</h5>
                            <p class="card-text">$ {{item.price}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-pagination">
                <button @click="getPrevPage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :class="{'opacity-50': prevDisabled, 'cursor-not-allowed': prevDisabled}">
                    Prev
                </button>
                <button @click="getNextPage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :class="{'opacity-50': nextDisabled, 'cursor-not-allowed': nextDisabled}">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    //import books from "../mock/books.json";
    import { ref } from 'vue'
    export default {
        name: 'Dashboard',
        data() {
            return {
                books: [],
                query: {
                    paginate: 5,
                    page: 1
                },
                paginationData: {},
                nextDisabled: false,
                prevDisabled: false,
                nextPageUrl: '',
                prevPageUrl: '',
            }
        },
        created() {
            this.getPage('http://127.0.0.1:8000/api/comics?paginate=10&page=1')
        },
        methods: {
            getPage(url) {
                if (url !== null) {
                    axios.get(url)
                        .then((response) => {
                            this.paginationData = response.data
                            this.books = response.data.data
                            this.prevDisabled = this.paginationData.prev_page_url === null
                            this.nextDisabled = this.paginationData.next_page_url === null
                            this.prevPageUrl = this.paginationData.prev_page_url
                            this.nextPageUrl = this.paginationData.next_page_url
                        })
                }
            },
            getNextPage() {
                if (!this.nextDisabled) {
                    this.getPage(this.nextPageUrl)
                }
            },
            getPrevPage() {
                if (!this.prevDisabled) {
                    this.getPage(this.prevPageUrl)
                }
            }
        }

    }
</script>

<style lang="postcss">
    .card-text {
        color: #3EB489;
    }

    .card {
        margin-left: 30%;
    }


    .container-all .search {
        margin: 0;
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -1300%);
    }

    .container-all{
        position: relative;
    }

    @media only screen and (min-device-width : 320px) {
        .card-text {
            color: #3EB489;
        }

        .card-body {
            padding: 10px;
        }

        .card-dash {
            padding: 10px;
        }

        .search {
            margin: 0;
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -400%);
        }

        .card-img-top{
            max-width: 100px;
            align-content: center;
        }

        .grid-cols-2{
            grid-template-columns: repeat(2, 1fr);
            margin: 10px;
        }

        .grid-cols-2 .card-img-top{
            position: relative;
            left: 16%;
            padding-top: 5%;
        }

        .grid-cols-2 .card-body{
            position: relative;
            left: 10%;
        }

        .all-item{
            margin-top: 35%;
        }

        .container-all{
            position: relative;
        }

        .container-pagination{
            padding: 10px;
            margin-left: 20%;
            position: relative;
        }

        @media only screen and (min-device-width : 375px) {
            .card-text {
                color: #3EB489;
            }

            .card-body {
                padding: 10px;
            }

            .card-dash {
                padding: 10px;
            }

            .search {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -400%);
            }

            .card-img-top{
                max-width: 100px;
                align-content: center;
            }

            .grid-cols-2{
                margin: 10px;
            }

            .grid-cols-2 .card-img-top{
                position: relative;
                left: 21%;
                padding-top: 5%;
            }

            .grid-cols-2 .card-body{
                position: relative;
                left: 14%;
            }

            .all-item{
                margin-top: 30%;
            }

            .container-all{
                position: relative;
            }

            .container-pagination{
                position: relative;
                left: 5%;
            }
        }

       
        @media only screen and (min-device-width : 425px){
            .card-text {
                color: #3EB489;
            }

            .card-body {
                padding: 10px;
            }

            .card-dash {
                padding: 10px;
            }

            .search {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -400%);
            }

            .card-img-top{
                max-width: 100px;
                align-content: center;
            }

            .grid-cols-2{
                margin: 10px;
            }

            .grid-cols-2 .card-img-top{
                position: relative;
                left: 24%;
                padding-top: 5%;
            }

            .grid-cols-2 .card-body{
                position: relative;
                left: 18%;
            }

            .all-item{
                margin-top: 30%;
            }

            .container-all{
                position: relative;
            }

            .container-pagination{
                position: relative;
                left: 7%
            }
        }

        @media only screen and (min-device-width : 540px) {
             .card-text {
                color: #3EB489;
            }

            .card-body {
                padding: 10px;
            }

            .card-dash {
                padding: 10px;
            }

            .search {
                margin: 0;
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translate(-50%, -400%);
            }

            .card-img-top{
                max-width: 100px;
                align-content: center;
            }

            .grid-cols-2{
                margin: 10px;
            }

            .grid-cols-2 .card-img-top{
                position: relative;
                left: 28%;
                padding-top: 5%;
            }

            .grid-cols-2 .card-body{
                position: relative;
                left: 24%;
            }

            .all-item{
                margin-top: 30%;
            }

            .container-all{
                position : relative;
            }

            .container-pagination{
                position: relative;
            }
        }

        @media only screen and (min-device-width : 640px) {
            .grid-cols-2 {
                grid-template-columns: repeat(4, 1fr);
            }

            .grid-cols-2 .card-img-top{
                position: relative;
                left: 18%;
                padding-top: 5%;
            }

            .grid-cols-2 .card-body{
                left: 12%;
            }

            .all-item {
                margin-top: 20%;
            }

            .search {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -100%);
            }

            .container-all{
                position: relative;
            }

            .container-pagination{
                position: relative;
            }
        }

        @media only screen and (min-device-width : 768px) {
            .container-all .search {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -1300%);
            }

            .container-all{
                position: relative;
            }

            .container-pagination{
                position: relative;
                left: 17%;
            }
        }


        @media only screen and (min-device-width : 812px) {

            .grid-cols-2 {
                grid-template-columns: repeat(4, 1fr);
            }

            .grid-cols-2 .card-img-top{
                position: relative;
                left: 31%;
                padding-top: 5%;
            }

            .grid-cols-2 .card-body{
                left: 27%;
            }

            .all-item {
                margin-top: 20%;
            }

            .search {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -100%);
            }

            .container-all {
                position: relative;
            }

            .container-pagination{
                position: relative;
            }
        }

        @media only screen and (min-device-width : 1024px) {
            .search {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -650%);
            }

            .container-pagination{
                position: relative;
                left: 20%;
            }
        }
    }
</style>