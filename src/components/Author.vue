<template>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="stylesheet" hreflang="http://www.w3schools.com/lib/w3.css" />
    <div class="body-author">
        <div class="container-author">
            <div class="container-info-author">
                <div class="image-author">
                    <img :src="author.profile_picture_url" />
                </div>
                <div class="container-text-author">
                    <p class="title">{{author.name}}</p>
                    <p class="title-tag">{{author.email}}</p>
                </div>
            </div>
        </div>
        <div class="deskripsi">
            {{author.description}}
        </div>
        <p class="cmn">Social Media - instagram.com </p>
    </div>
</template>

<script>
    import axios from 'axios'
    import { ref } from 'vue'
    import Author from "../apis/Author";
    export default {
        name: 'author',
        data() {
            return {
                author: []
            };
        },
        mounted() {
            Author.get(this.$route.params.id).then(response => {
                this.author = response.data;
            })
        }
    }
</script>

<style lang="postcss">
    .container-info {
        display: flex;
        padding: 20px;
    }

    img {
        max-width: 100%
    }

    .image {
        flex-basis: 40%
    }

    .text {
        font-size: 20px;
        padding-left: 20px;
    }

    .price {
        color: #3EB489;
        margin-top: 5%;
    }

    .body-card {
        margin-right: 20%;
        background-color: #000000;
        margin-top: 15%;
        border-radius: 10px;
        height: 200px;
    }

    .judul {
        font-size: 30px;
        margin-left: 50px;
    }

    .comment {
        font-size: 35px;
        margin-left: 50px;
    }

    .jam {
        margin-left: 50px;
    }

    .btn-comment-rep {
        border: double;
        border-color: #3EB489;
    }

    .btn-comment-like {
        background-color: #3EB489;
        width: 50px;
        margin-left: 10%;
    }

    .button {
        margin-left: 70%;
    }


    .sinopsis {
        float: right;
    }

    .container-details {
        position: relative;
    }

    .container-info {
        position: relative;
    }

    @media only screen and (min-device-width : 320px) {
        .cmn {
            padding: 15px;
            margin-top: 10%;
        }

        .title-tag {
            font-size: 15px;
        }

        .comment {
            font-size: 15px;
            margin-left: 50px;
        }

        .deskripsi {
            padding: 15px;
            float: right;
        }

        .title {
            font-size: 20px;
        }

        .container-info-author {
            position: relative;
            display: flex;
            padding: 10px;
        }

        img {
            max-width: 100%
        }

        .image-author {
            flex-basis: 40%
        }

        .image-author {
            padding: 5px;
        }

        .text {
            font-size: 20px;
            padding-left: 20px;
            max-width: 100%;
        }

        .container-details {
            position: relative;
        }

        .container-text-author {
            position: relative;
            padding: 5px;
            margin-left: 2%;
        }

        .body-author {
            height: 100%;
        }
    }

    @media only screen and (min-device-width : 375px) {
        .title {
            font-size: 25px;
        }

        .title-tag {
            font-size: 18px;
        }

        .container-text-author {
            position: relative;
            padding: 10px;
        }
    }

    @media only screen and (min-device-width : 411px) {
        .container-text-author {
            position: relative;
        }
    }

    @media only screen and (min-device-width : 425px) {
        .title {
            font-size: 30px;
        }

        .title-tag {
            font-size: 20px;
        }

        .container-text-author {
            position: relative;
            padding: 10px;
        }
    }

    @media only screen and (min-device-width : 540px) {
        .container-text-author {
            position: relative;
        }
    }


    @media only screen and (min-device-width : 640px) {
        .title {
            font-size: 40px;
        }

        .title-tag {
            font-size: 30px;
        }

        .deskripsi {
            font-size: 20px;
        }

        .container-text-author {
            position: relative;
            padding: 10px;
        }
    }

    @media only screen and (min-device-width : 768px) {
        .container-text-author {
            position: relative;
        }
    }

    @media only screen and (min-device-width : 812px) {
        .title {
            font-size: 70px;
        }

        .title-tag {
            font-size: 35px;
        }

        .deskripsi {
            font-size: 20px;
        }

        .container-text-author {
            position: relative;
            padding: 0px;
        }
    }

    @media only screen and (min-device-width : 1024px) {
        .container-text-author {
            position: relative;
            right: 10%;
        }
    }
</style>