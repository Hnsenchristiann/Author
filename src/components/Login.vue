<template>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <div class="background">
        <div class="spacer">

        </div>
        <div class="flex-col justify-center align-center relative">
            <button class="sign-in" @click="redirectSign">Sign In</button>
        </div>
        <div class="flex-col justify-center align-center relative">
            <button class="sign-up" @click="redirectBuat">Sign Up</button>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: 'login',
        created() {
            console.log('asdfasdasdf')
        },
        methods: {
            redirectSign() {
                this.$router.push('/signin')
            },
            redirectBuat() {
                this.$router.push('/regis')
            }
        }
    }
</script>

<style lang="postcss">
    .relative {
        position: relative;
    }

    .background {
        position: relative;
        max-width: 1200px;
        height: 100vh;
    }

        .background:before {
            content: '';
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            /* max-width: 1200px; */
            /* height: 100vh; */
            background: url(../assets/Logo.png) calc(50vw - 50px) calc(10vh)/215px 150px no-repeat, url(../assets/bg1.png) calc(100% + 20px) calc(100% - 20px)/calc(75vw) calc(75vw) no-repeat, url(../assets/bg2.png) calc(100% - 140px) calc(100% - 20px)/calc(75vw) calc(75vw) no-repeat, url(../assets/bg3.png) calc(100% + 25px) calc(100% - 80px)/calc(100vw + 100px) calc(100vw + 100px) no-repeat;
            opacity: 0.5;
        }

    .spacer {
        height: 50vh;
    }

    .sign-in {
        background-color: #3EB489;
        border: none;
        width: 300px;
        height: 50px;
        border-radius: 10px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border-radius: 10px;
    }

    .sign-up {
        background-color: #3EB489;
        border: none;
        width: 300px;
        height: 50px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, 75%);
        border-radius: 10px;
    }

    @media screen and (max-width:320px) {
        .sign-in {
            background-color: #3EB489;
            border: none;
            margin-left: 14%;
            width: 250px;
            height: 50px;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border-radius: 10px;
        }

        .sign-up {
            background-color: #3EB489;
            border: none;
            width: 250px;
            height: 50px;
            margin-left: 14%;
            margin-top: 2%;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, 75%);
            border-radius: 10px;
        }
    }
</style>