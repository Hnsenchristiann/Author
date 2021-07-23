<template>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="stylesheet" hreflang="http://www.w3schools.com/lib/w3.css" />
    <div class="container-book">
        <div class="container-info">
            <div class="image">
                <img src="../assets/details.png" />
            </div>
            <div class="container-text">
                <p class="title">{{book.title}}</p>
                <p class="title-tag">{{book.title}}</p>
                <p class="price">$ {{book.price}}</p>
                <div class="image-share">
                    <img src="../assets/details.png" />
                </div>
                <div class="text-share">
                    <p class="share">567</p>
                </div>
                <div class="image-love">
                    <img src="../assets/details.png" />
                </div>
                <div class="text-love">
                    <p class="share">567</p>
                </div>
                <button class="read-button">READ</button>
            </div>
        </div>
    </div>
    <div class="sinopsis">
        {{book.description}}
    </div>

    <p class="cmn">Comments : </p>

    <div v-for="item in comment" :key="item.id">
        <div class="container-details">

            <div class="card-tumpuk">
            </div>

            <div class="card2">
                <h1 class="judul">{{item.comment}}</h1>
                <p class="comment">{{item.name}}</p>
                <p class="jam">{{item.created_at}}</p>
                <div class="button">
                    <button class="btn-comment-rep">Reply</button>
                    <button class="btn-comment-like">Like</button>
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
        name: 'comic-books',
        data() {
            return {
                book: [],
                comment: []
            };
        },
        mounted() {
            Comic.auth().then(response => {
                this.book = response.data;
            }),

            Comic.comment().then(response => {
                this.comment = response.data;
            })
        }
    }
</script>

<style lang="postcss">
    .read-button {
        background-color: #3EB489;
        position: absolute;
        z-index: 999;
        width: 15vw;
        height: 5vw;
        top: -5%;
        right: 4rem;
    }

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

    .container-details{
        position: relative;
    }

    .container-info{
        position: relative;
    }

    @media only screen and (min-device-width : 320px) {
        .read-button {
            background-color: #3EB489;
            position: absolute;
            z-index: 999;
            max-width: 30vw;
            height: 10vw;
            top: 74%;
            right: 1rem;
        }

        .cmn {
            padding: 15px;
            margin-top: 10%;
        }

        .title-tag {
            font-size: 15px;
        }

        .price {
            color: #3EB489;
            font-size: 15px;
        }

        .body-card {
            margin-right: 20%;
            background-color: #000000;
            margin-top: 85%;
            border-radius: 10px;
            height: 150px;
            width: 300px;
        }

        .judul {
            font-size: 18px;
            margin-left: 50px;
        }

        .comment {
            font-size: 15px;
            margin-left: 50px;
        }

        .jam {
            margin-left: 50px;
        }

        .btn .btn-comment-rep {
            border: double;
            border-color: #3EB489;
        }

        .btn-comment-rep {
            height: 27px;
            width: 50px;
        }

        .btn-comment-like {
            height: 27px;
        }

        .container2 {
            margin-bottom: 20%;
        }


        .btn .btn-comment-like {
            background-color: #3EB489;
            width: 50px;
        }

        .button {
            margin-left: 50%;
        }



        .sinopsis {
            padding: 15px;
            float: right;
        }


        .card2 {
            background-color: #000000;
            border-radius: 10px;
            max-width: 250px;
            padding: 10px;
            margin-left: 50px;
            margin-top: 35px;
        }

        .title {
            font-size: 20px;
        }

        .love-det {
            float: left;
            width: 33.33%;
            padding: 5px;
        }

        .row-det::after {
            content: "";
            clear: both;
            display: table;
        }

        .card-tumpuk {
            background-color: #808080;
            width: 60px;
            height: 60px;
            position: absolute;
            top: 6%;
            left: 4%;
            border-radius: 10px;
        }

        .card {
            background-color: #808080;
            width: 60px;
            height: 60px;
            position: absolute;
            top: 61%;
            left: -25%;
            border-radius: 10px;
        }

        .container-info {
            position:relative;
            display: flex;
            padding: 10px;
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
            max-width: 100%;
        }

        .image-share {
            max-width: 20px;
            height: 20px;
            display: flex;
            position: absolute;
            top: 228%;
            left: 40%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-110%, -850%);
        }

        .text-share {
            position: absolute;
            top: 229%;
            left: 40%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-10%, -980%);
            font-size: 12px;
        }

        .image-love {
            max-width: 20px;
            height: 20px;
            display: flex;
            position: absolute;
            top: 228%;
            left: -12.5%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(150%, -850%);
        }

        .text-love {
            position: absolute;
            top: 228.5%;
            left: -12%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(255%, -980%);
            font-size: 12px;
        }

        .container-details {
            position: relative;
        }

        .container-text{
            position: relative;
            padding: 5px;
        }

    }

        @media only screen and (min-device-width : 375px) {
            .card-tumpuk {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 5%;
                left: 3%;
                border-radius: 10px;
            }

            .card {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 60%;
                left: -27%;
                border-radius: 10px;
            }

            .image-share {
                max-width: 20px;
                height: 20px;
                display: flex;
                position: absolute;
                top: 210%;
                left: 15%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-110%, -1100%);
            }

            .text-share {
                position: absolute;
                top: 210%;
                left: 15%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-10%, -1250%);
                font-size: 12px;
            }

            .image-love {
                max-width: 20px;
                height: 20px;
                display: flex;
                position: absolute;
                top: 210%;
                left: 15%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(150%, -1100%);
            }

            .text-love {
                position: absolute;
                top: 210%;
                left: 15%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(255%, -1245%);
                font-size: 12px;
            }

            .read-button {
                background-color: #3EB489;
                position: absolute;
                z-index: 999;
                max-width: 30vw;
                height: 10vw;
                top: 70%;
                right: 1rem;
            }

            .title {
                font-size: 25px;
            }

            .title-tag {
                font-size: 18px;
            }

            .container-details{
                position: relative;
                padding-right: 5%;
            }

            .card2{
                max-width: 100%;
            }

            .btn-comment-rep{
                width: 70px;
                height: 27px;
            }

            .btn-comment-like{
                height: 27px;
            }

            .container-text{
                position: relative;
                padding: 10px;
            }
        }

        @media only screen and (min-device-width : 411px) {
            .container-text{
                position: relative;
            }

            .image-share {
                max-width: 20px;
                height: 20px;
                display: flex;
                position: absolute;
                top: 190%;
                left: 12.5%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-110%, -1100%);
            }

            .text-share {
                position: absolute;
                top: 191%;
                left: 12.5%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-10%, -1250%);
                font-size: 12px;
            }

            .image-love {
                max-width: 20px;
                height: 20px;
                display: flex;
                position: absolute;
                top: 190%;
                left: 15%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(150%, -1100%);
            }

            .text-love {
                position: absolute;
                top: 191%;
                left: 16%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(255%, -1245%);
                font-size: 12px;
            }
        }

        @media only screen and (min-device-width : 425px) {
            .card-tumpuk {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 62%;
                left: 2%;
                border-radius: 10px;
            }

            .card {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 6%;
                left: -28%;
                border-radius: 10px;
            }

            .image-share {
                max-width: 20px;
                height: 20px;
                display: flex;
                position: absolute;
                top: 190%;
                left: 12.5%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-110%, -1100%);
            }

            .text-share {
                position: absolute;
                top: 191%;
                left: 12.5%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-10%, -1250%);
                font-size: 12px;
            }

            .image-love {
                max-width: 20px;
                height: 20px;
                display: flex;
                position: absolute;
                top: 190%;
                left: 15%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(150%, -1100%);
            }

            .text-love {
                position: absolute;
                top: 191%;
                left: 16%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(255%, -1245%);
                font-size: 12px;
            }

            .read-button {
                background-color: #3EB489;
                position: absolute;
                z-index: 999;
                max-width: 30vw;
                height: 10vw;
                top: 72%;
                right: 1rem;
            }

            .title {
                font-size: 30px;
            }

            .title-tag {
                font-size: 20px;
            }

            .container-details{
                position: relative;
            }

            .container-text{
                position: relative;
                padding: 10px;
            }
        }

        @media only screen and (min-device-width : 540px) {
            .container-text{
                position: relative;
            }

            .image-share {
                max-width: 20px;
                height: 20px;
                display: flex;
                position: absolute;
                top: 160%;
                left: 12.5%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-110%, -1100%);
            }

            .text-share {
                position: absolute;
                top: 160.5%;
                left: 12.5%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-10%, -1250%);
                font-size: 12px;
            }

            .image-love {
                max-width: 20px;
                height: 20px;
                display: flex;
                position: absolute;
                top: 160%;
                left: 15%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(150%, -1100%);
            }

            .text-love {
                position: absolute;
                top: 160.5%;
                left: 16%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(255%, -1245%);
                font-size: 12px;
            }
        }
        

        @media only screen and (min-device-width : 640px) {
            .card-tumpuk {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 63%;
                left: 25%;
                border-radius: 10px;
            }

            .card {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 7%;
                left: -5%;
                border-radius: 10px;
            }

            .image-share {
                max-width: 40px;
                height: 40px;
                display: flex;
                position: absolute;
                top: 220%;
                left: 14%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-110%, -1100%);
            }

            .text-share {
                position: absolute;
                top: 154%;
                left: 13.5%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-10%, -1250%);
                font-size: 12px;
            }

            .image-love {
                max-width: 40px;
                height: 40px;
                display: flex;
                position: absolute;
                top: 220%;
                left: 10%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(150%, -1100%);
            }

            .text-love {
                position: absolute;
                top: 154%;
                left: 23%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(255%, -1245%);
                font-size: 12px;
            }

            .read-button {
                background-color: #3EB489;
                position: absolute;
                z-index: 999;
                max-width: 30vw;
                height: 10vw;
                top: 74%;
                right: 1rem;
            }

            .title {
                font-size: 40px;
            }

            .title-tag {
                font-size: 30px;
            }

            .price {
                font-size: 25px;
            }

            .sinopsis {
                font-size: 20px;
            }

            .card2 {
                margin-left: 30%;
            }

            .btn-comment-rep{
                margin-left: 20%;
            }

            .container-text{
                position: relative;
                padding: 10px;
            }
        }

        @media only screen and (min-device-width : 768px) {
            .container-text{
                position: relative;
            }

            .image-share {
                max-width: 40px;
                height: 40px;
                display: flex;
                position: absolute;
                top: 200%;
                left: 10%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-110%, -1100%);
            }

            .text-share {
                position: absolute;
                top: 143%;
                left: 10%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-10%, -1250%);
                font-size: 12px;
            }

            .image-love {
                max-width: 40px;
                height: 40px;
                display: flex;
                position: absolute;
                top: 200%;
                left: 10%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(150%, -1100%);
            }

            .text-love {
                position: absolute;
                top: 143%;
                left: 22%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(255%, -1245%);
                font-size: 12px;
            }
        }

        @media only screen and (min-device-width : 812px) {
            .card-tumpuk {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 7%;
                left: 19%;
                border-radius: 10px;
            }

            .card {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 64%;
                left: -11%;
                border-radius: 10px;
            }

            .image-share {
                max-width: 40px;
                height: 40px;
                display: flex;
                position: absolute;
                top: 200%;
                left: 10%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-110%, -1100%);
            }

            .text-share {
                position: absolute;
                top: 143%;
                left: 10%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-10%, -1250%);
                font-size: 12px;
            }

            .image-love {
                max-width: 40px;
                height: 40px;
                display: flex;
                position: absolute;
                top: 200%;
                left: 10%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(150%, -1100%);
            }

            .text-love {
                position: absolute;
                top: 143%;
                left: 22%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(255%, -1245%);
                font-size: 12px;
            }

            .read-button {
                background-color: #3EB489;
                position: absolute;
                z-index: 999;
                max-width: 30vw;
                height: 10vw;
                top: 70%;
                right: 1rem;
            }

            .title {
                font-size: 70px;
            }

            .title-tag {
                font-size: 35px;
            }

            .price {
                font-size: 30px;
            }

            .sinopsis {
                font-size: 20px;
            }

            .card2 {
                margin-left: 30%;
            }

            .container-details{
                position: relative;
                padding-right: 20%;
            }

            .btn-comment-rep{
                margin-left: 20%;
            }

            .container-text{
                position: relative;
                padding: 0px;
            }
        }

        @media only screen and (min-device-width : 1024px) {
            .container-text{
                position: relative;
                right: 10%;
            }

            .card2{
                width: 500px;
            }

            .card-tumpuk {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 7%;
                left: 20%;
                border-radius: 10px;
            }

            .card {
                background-color: #808080;
                width: 60px;
                height: 60px;
                position: absolute;
                top: 64%;
                left: -10%;
                border-radius: 10px;
            }
            
        }

</style>