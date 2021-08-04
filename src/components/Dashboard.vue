<template>
    <div class="body-slide">
        <div class="slider">
            <div class="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div class="slide first">
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png" alt="" />
                </div>
                <div class="slide">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="" />
                </div>
                <div class="slide">
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png" alt="" />
                </div>
                <div class="slide">
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png" alt="" />
                </div>

                <div class="navigation-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                    <div class="auto-btn3"></div>
                    <div class="auto-btn4"></div>
                </div>

            </div>

            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>

        </div>
    </div>

    <div class="header-parent">
        <div class="header-row">
            <a href="#">NEW RELEASE</a>
            <img class="Arr" src="../assets/RightArr.png" />
        </div>

        <div class="parent-container">

            <div class="child-container scroll">

                <div class="childofchild" v-for="item in books" :key="item.id">
                    <router-link :to="{ name: 'BookDetail', params: {id: item.id}}">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                        <div class="user-story">
                            <p>{{item.title}}</p>
                            <p>{{item.price}}</p>
                        </div>
                    </router-link>
                </div>

                <div class="childofchild"></div>

            </div>

        </div>
    </div>

    <div class="header-parent">
        <div class="header-row">
            <a href="#">MOST VIEWED</a>
            <img class="Arr" src="../assets/RightArr.png" />
        </div>

        <div class="parent-container">

            <div class="child-container scroll">

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild"></div>

            </div>

        </div>
    </div>

    <div class="header-parent">
        <div class="header-row">
            <a href="#">CATEGORY</a>
            <img class="Arr" src="../assets/RightArr.png" />
        </div>

        <div class="parent-container">

            <div class="child-container scroll">

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild"></div>

            </div>

        </div>
    </div>

    <div class="header-parent">
        <div class="header-row">
            <a href="#">GENRE</a>
            <img class="Arr" src="../assets/RightArr.png" />
        </div>

        <div class="parent-container">

            <div class="child-container scroll">

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild"></div>

            </div>

        </div>
    </div>

    <div class="header-parent">
        <div class="header-row">
            <a href="#">TOP PAID</a>
            <img class="Arr" src="../assets/RightArr.png" />
        </div>

        <div class="parent-container">

            <div class="child-container scroll">

                <div class="childofchild">
                    <img class="poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyfQKLVqlmLMM7Y2gqsAZBo0mN4FptGFdFg&usqp=CAU" alt="">
                    <div class="user-story">
                        <p>Comic Title</p>
                        <p>$16.99</p>
                    </div>
                </div>

                <div class="childofchild"></div>

            </div>

        </div>
    </div>

    <div id="sliders">
        <input type="radio" name="slider" id="slide1" checked>
        <input type="radio" name="slider" id="slide2">
        <input type="radio" name="slider" id="slide3">
        <input type="radio" name="slider" id="slide4">
        <div id="slidest">
            <div id="overflow">
                <div class="inner">
                    <div class="slide slide_1">
                        <div class="slide-content">
                            <h2>Slide 1</h2>
                            <p>Content for Slide 1</p>
                        </div>
                    </div>
                    <div class="slide slide_2">
                        <div class="slide-content">
                            <h2>Slide 2</h2>
                            <p>Content for Slide 2</p>
                        </div>
                    </div>
                    <div class="slide slide_3">
                        <div class="slide-content">
                            <h2>Slide 3</h2>
                            <p>Content for Slide 3</p>
                        </div>
                    </div>
                    <div class="slide slide_4">
                        <div class="slide-content">
                            <h2>Slide 4</h2>
                            <p>Content for Slide 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="controls">
            <label for="slide1"></label>
            <label for="slide2"></label>
            <label for="slide3"></label>
            <label for="slide4"></label>
        </div>
        <div id="bullets">
            <label for="slide1"></label>
            <label for="slide2"></label>
            <label for="slide3"></label>
            <label for="slide4"></label>
        </div>
    </div>

    <div class="foot-parent">
        <div class="foo-content">
            <a href="#">Support</a>
            <img class="Arr" src="../assets/RightArr.png" />
        </div>

        <div class="foot-content2">
            <a href="#">Company</a>
            <img class="Arr2" src="../assets/RightArr.png" />
        </div>

        <div class="foot-content3">
            <a href="#">Our Creators</a>
            <img class="Arr3" src="../assets/RightArr.png" />
        </div>

        <div class="foot-content4">
            <a href="#">Contact Info</a>
            <img class="Arr4" src="../assets/RightArr.png" />
        </div>

        <div class="foot-content5">
            <a href="#">Back to Top</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { ref } from 'vue'
    import Comic from "../apis/Comic";
    export default {
        name: 'dashboard',
        data() {
            return {
                books: [],
            };
        },
        mounted() {
            Comic.get(this.$route.params.id).then(response => {
                this.books = response.data;
            })
        }
    }

    var counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);
</script>

<style lang="postcss">

    @media only screen and (min-device-width : 320px) { 

        template{
            scroll-behavior: smooth;
        }

        .body-slide{
            margin: 0;
            padding: 0px;
            height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .slider{
            width: 800px;
            height: 200px;
            border-radius: 10px;
            overflow: hidden;
        }

        .slides{
            width: 500%;
            height: 210px;
            display: flex;
        }

        .slides input{
            display: none;
        }

        .slide{
            width: 20%;
            padding: 10px;
            transition: 2s;
        }

        .slide img{
            width: 600px;
            height: 200px;
        }

        .navigation-manual{
            position: absolute;
            width: 330px;
            margin-top: -40px;
            display: flex;
            justify-content: center;
        }

        .manual-btn{
            border: 2px solid #40D3DC;
            padding: 5px;
            border-radius: 10px;
            cursor: pointer;
            transition: 1s;
        }

        .manual-btn:not(:last-child){

            margin-right: 40px;
        }

        .manual-btn:hover{
            background: #40D3DC;
        }

        #radio1:checked ~ .first{
            margin-left: 0;
        }

        #radio2:checked ~ .first {
            margin-left: -20%;
        }

        #radio3:checked ~ .first {
            margin-left: -40%;
        }

        #radio4:checked ~ .first {
            margin-left: -60%;
        }

        .navigation-auto{
            position: absolute;
            display: flex;
            width: 330px;
            justify-content: center;
            margin-top: 170px;
        }

        .navigation-auto div{
            border: 2px solid #40D3DC;
            padding: 5px;
            border-radius: 10px;
            transition: 1s;
        }

        .navigation-auto div:not(:last-child){
            margin-right: 40px;
        }

        #radio1:checked ~ .navigation-auto .auto-btn1{
            background: #40D3DC;
        }

        #radio2:checked ~ .navigation-auto .auto-btn2 {
            background: #40D3DC;
        }

        #radio3:checked ~ .navigation-auto .auto-btn3 {
            background: #40D3DC;
        }

        #radio4:checked ~ .navigation-auto .auto-btn4 {
            background: #40D3DC;
        }


        .header-row {
            margin-top: 20px;
            font-size: 20px;
            max-width: 100%;
            padding: 10px;
        }

        .body-isi {
            margin: 10px;
            padding: 0px;
        }

        .box {
            width: 120px;
            box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
            border-radius: 10px;
            overflow: hidden;
        }

        .slide-img {
            height: 150px;
            position: relative;
        }

            .slide-img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                box-sizing: border-box;
            }

        .detail-box {
            width: 100%;
        }

        .overlay {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            background-color: rgba(92, 95, 236, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .buy-btn {
            width: 160px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FFFFFF;
            color: #252525;
            font-weight: 700;
            letter-spacing: 1px;
            font-family: Calibri;
            border-radius: 20px;
            box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
        }

            .buy-btn:hover {
                color: #FFFFFF;
                background-color: #F15FA3;
                transition: all ease 0.3s;
            }

        .overlay {
            visibility: hidden;
        }

        .slide-img:hover .overlay {
            visibility: visible;
            animation: fade 0.5s;
        }

        @keyframes fade {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        .parent-container {
            width: 101%;
            max-width: 500px;
            height: 220px;
            background-color: bg-gray-700;
            /* box-shadow: 0px 5px 10px 0px rgb(56, 55, 55); */
            border-radius: 4px;
            padding: 10px;
            margin: auto;
        }

        .child-container:not(:first-child) {
            margin-top: 10px;
        }

        .child-container {
            font-size: 14px;
            background-color: bg-gray-700;
            line-height: 25px;
        }

        .scroll {
            min-width: 100%;
            height: 200px;
            overflow-y: hidden;
            overflow-x: scroll;
            display: flex;
            scroll-behavior: smooth;
            position: relative;
        }

            .scroll::-webkit-scrollbar {
                height: 5px;
            }

            /* Track */
            .scroll::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px grey;
                border-radius: 10px;
            }

            /* Handle */
            .scroll::-webkit-scrollbar-thumb {
                background: rgb(218, 235, 187);
                border-radius: 10px;
            }

                /* Handle on hover */
                .scroll::-webkit-scrollbar-thumb:hover {
                    background: rgb(134, 145, 114);
                }

        .childofchild {
            min-width: 50%;
            max-width: 800px;
            background-color: rgb(218, 235, 187);
            height: 180px;
            padding: 5px 20px;
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }


            .childofchild:last-child {
                min-width: 0px;
                max-width: 0px;
                padding: 1.5px;
                background-color: bg-gray-700;

            }

        .user-details {
            width: 100%;
            height: 40%;
            display: inherit;
            justify-content: flex-start;
            align-items: flex-start;
            border-bottom: 1px solid #a3be61;
        }

        .user-imgsection {
            width: 25%;
            height: 100%;
            display: inherit;
            justify-content: flex-start;
            align-items: center;
        }

            .user-imgsection img {
                width: 80px;
                height: 80px; 
            }

        .user-profilesection {
            width: 70%;
            height: 100%;
            padding: 5px 5px;
            display: inherit;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }

        .user-story {
            width: 100%;
            height: 60%;
            font-size: 16px;
            margin-top: 10px;
            color: rgba(0, 0, 0, 0.822);
        }
       
        .foot{
            height: 700px;
        }

        .foo-content {
            position: relative;
            margin-top: 140px;
            left: 50%;
            transform: translate(-50%, -50%);
            background: grey;
            width: 320px;
            line-height: 40px;
            padding: 8px 25px;
            border: solid;
        }

        .Arr{
            width: 30px;
            height: 30px;
            float: right;
            padding: 5px;
        }

        .foot-content2 {
            position: relative;
            margin-top: 1px;
            left: 50%;
            transform: translate(-50%, -50%);
            background: grey;
            width: 320px;
            line-height: 40px;
            padding: 8px 25px;
            border: solid;
        }

        .Arr2 {
            width: 30px;
            height: 30px;
            float: right;
            padding: 5px;
            margin-top: 5px;
        }

        .foot-content3 {
            position: relative;
            margin-top: 0.2px;
            left: 50%;
            transform: translate(-50%, -50%);
            background: grey;
            width: 320px;
            line-height: 40px;
            padding: 8px 25px;
            border: solid;
        }

        .Arr3 {
            width: 30px;
            height: 30px;
            float: right;
            padding: 5px;
            margin-top: 5px;
        }

        .foot-content4 {
            position: relative;
            margin-top: 1px;
            left: 50%;
            transform: translate(-50%, -50%);
            background: grey;
            width: 320px;
            line-height: 40px;
            padding: 8px 25px;
            border: solid;
        }

        .Arr4 {
            width: 30px;
            height: 30px;
            float: right;
            padding: 5px;
            margin-top: 5px;
        }

        .foot-content5 {
            position: relative;
            margin-top: 0.5px;
            left: 50%;
            transform: translate(-50%, -50%);
            background: grey;
            width: 320px;
            line-height: 40px;
            padding: 8px 25px;
            border: solid;
            text-align: center;
        }

        #sliders {
            margin: auto;
            width: 220px;
            max-width: 100%;
            margin-top: 5%;
            text-align: center;
        }

            #sliders input[type=radio] {
                display: none;
            }

            #sliders label {
                cursor: pointer;
                text-decoration: none;
            }

        #overflow {
            width: 100%;
            overflow: hidden;
        }

        #slide1:checked ~ #slidest .inner {
            margin-left: 0;
        }

        #slide2:checked ~ #slidest .inner {
            margin-left: -100%;
        }

        #slide3:checked ~ #slidest .inner {
            margin-left: -200%;
        }

        #slide4:checked ~ #slidest .inner {
            margin-left: -300%;
        }

        #slidest .inner {
            transition: margin-left 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            width: 400%;
            line-height: 0;
            height: 300px;
        }

        #slidest .slide {
            width: 25%;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            color: #fff;
        }

        #slidest .slide_1 {
            background: #00171F;
            height: 193px;
        }

        #slidest .slide_2 {
            background: #003459;
            height: 193px;
        }

        #slidest .slide_3 {
            background: #007EA7;
            height: 193px;
        }

        #slidest .slide_4 {
            background: #00A8E8;
            height: 193px;
        }

        #controls {
            margin: -220px 0 0 0;
            width: 100%;
            height: 10px;
            z-index: 3;
            position: relative;
        }

            #controls label {
                transition: opacity 0.2s ease-out;
                display: none;
                width: 20px;
                height: 20px;
                opacity: .4;
            }

                #controls label:hover {
                    opacity: 1;
                }

        #slide1:checked ~ #controls label:nth-child(2),
        #slide2:checked ~ #controls label:nth-child(3),
        #slide3:checked ~ #controls label:nth-child(4),
        #slide4:checked ~ #controls label:nth-child(1) {
            background: url(https://image.flaticon.com/icons/svg/130/130884.svg) no-repeat;
            float: right;
            margin: 0 -50px 0 0;
            display: block;
        }

        #slide1:checked ~ #controls label:nth-last-child(2),
        #slide2:checked ~ #controls label:nth-last-child(3),
        #slide3:checked ~ #controls label:nth-last-child(4),
        #slide4:checked ~ #controls label:nth-last-child(1) {
            background: url(https://image.flaticon.com/icons/svg/130/130882.svg) no-repeat;
            float: left;
            margin: 0 0 0 -50px;
            display: block;
        }

    }
        
    @media only screen and (min-device-width : 375px) {
            
    }
    @media only screen and (min-device-width : 425px){
            
    }

    @media only screen and (min-device-width : 540px) {
             
    }

    @media only screen and (min-device-width : 640px) {
            
    }

    @media only screen and (min-device-width : 768px) {
           
    }        
    
    @media only screen and (min-device-width : 812px) {

            
    }

    @media only screen and (min-device-width : 1024px) {
            
    }
</style>