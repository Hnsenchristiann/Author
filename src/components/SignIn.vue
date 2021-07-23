<template>
    <section class="container-signin">
        <div class="row">
            <div class="card-sign">
                <form action="">
                    <div class="form-group-email">
                        <label for="email" class="input-label">Email <span class="text-danger"> *</span></label>
                        <input type="email" v-model="form.email" class="form-control" placeholder="Email" required="required" />
                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                    </div>
                    <div class="form-group-password">
                        <label for="password" class="input-label">Password<span class="text-danger"> *</span></label>
                        <input type="password" v-model="form.password" class="form-control" placeholder="Password" required="required" />
                        <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                    </div>
                    <br />
                    <p class="remember"><input type='checkbox' />Remember Me</p>
                    <br />
                    <div class="form-group d-flex justify-content-left">
                        <a class="forgot" href="">Forgot Your Password ? </a>
                    </div>
                    <div class="form-group d-flex justify-content-center">
                        <button @click.prevent="login" type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
  
<script>
    import User from "../apis/User";
    import { ref } from 'vue'
    export default {
        name: 'SignIn',
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                errors: []
            };
        },

        methods: {
            login() {
                User.login(this.form)
                .then(response => {
                    localStorage.setItem("token", response.data.token);
                    this.$router.push('home');
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        this.errors = error.response.data.errors;
                    }
                });
            }
        }
        
    }
</script>

<style>
    .card-sign {
        width: 300px;
        height: 350px;
        margin-bottom: 30%;
        margin-top: 50%;
        margin-left: 7%;
        border-radius: 10px;
        background-color: #ffffff;
    }

    .form-group-email {
        margin-top: 5%;
        margin-left: 2%;
    }

    .form-group-password {
        margin-top: 5%;
        margin-left: 2%;
    }

    .forgot {
        margin-left: 2%;
        margin-top: 5%;
    }

    .remember {
        margin-left: 2%;
    }

    .btn-primary {
        margin-bottom: 10%;
        margin-left: 90%;
        width: 150px;
    }

    @media (min-width: 320px) {

        .container-signin {
            height: 750px;
            position: relative;
        }

        .card-sign {
            width: 250px;
            height: 350px;
            background-color: #ffffff;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border-radius: 10px;
        }

        .form-group-email {
            margin-top: 5%;
            margin-left: 2%;
        }

        .form-group-password {
            margin-top: 5%;
            margin-left: 2%;
        }

        .forgot {
            margin-left: 2%;
            margin-top: 5%;
        }

        .remember {
            margin-left: 2%;
        }

        .btn-primary {
            margin-bottom: 10%;
            margin-left: 50%;
            margin-top: 10%;
            width: 150px;
        }
    }

</style>