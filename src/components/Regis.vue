<template>
    <div class="container-regis">
        <div class="row">
            <div class="card-regis">
                <form action="">
                    <div class="form-group-user">
                        <label for="username" class="input-label">Username<span class="text-danger"> *</span></label>
                        <input type="username" v-model="form.name" class="form-control" placeholder="Masukkan Username" required="required" maxlength="20" mmin="5" />
                        <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                    </div>
                    <br />
                    <div class="form-group-full">
                        <label for="fullname" class="input-label">Full Name<span class="text-danger"> *</span></label>
                        <input type="fullname" v-model="form.full_name" class="form-control" placeholder="Masukkan fullname" required="required" maxlength="20" />
                        <span class="text-danger" v-if="errors.full_name">{{ errors.full_name[0] }}</span>
                    </div>
                    <div class="form-group-email">
                        <label for="email" class="input-label">Email<span class="text-danger"> *</span></label>
                        <input type="email" v-model="form.email" class="form-control" placeholder="Email" required="required" />
                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                    </div>
                    <br />
                    <div class="form-group-pass">
                        <label for="password" class="input-label">Password<span class="text-danger"> *</span></label>
                        <input type="password" v-model="form.password" class="form-control" placeholder="Password" required="required" />
                        <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                    </div>
                    <br />
                    <div class="form-group-conpass">
                        <label for="password" class="input-label">Confrim Passwrod<span class="text-danger"> *</span></label>
                        <input type="password" v-model="form.password_confirmation" class="form-control" placeholder="Password" required="required" />
                        <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                    </div>
                    <br />
                    <p class="remember"><input type='checkbox' /> i agree to <a href="">terms</a> and <a href="">policy</a></p>
                    <a class="regis" href="">Already registered ? </a>
                    <div class="form-group d-flex justify-content-center">
                        <button type="submit" @click.prevent="register" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import User from "../apis/User";
    import { ref } from 'vue'
    export default {
        name: 'regis',
        data() {
            return {
                form: {
                    name: '',
                    full_name: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: []
            };
        },

        methods: {
            register() {
                User.register(this.form)
                .then(() => {
                    this.$router.push('signin');
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                });
            }
        }
    };
</script>

<style>

    .card-regis {
        width: 570px;
        height: 580px;
        margin-bottom: 5%;
        margin-top: 10%;
        margin-left: 10%;
    }

    .form-group-user {
        margin-top: 5%;
    }

    .regis {
        margin-left: 2%;
    }

    .form-group-user {
        margin-left: 2%;
    }

    .form-group-full {
        margin-left: 2%;
    }

    .form-group-email {
        margin-left: 2%;
    }

    .form-group-pass {
        margin-left: 2%;
    }

    .form-group-conpass {
        margin-left: 2%;
    }

    .btn-primary {
        width: 250px;
        margin-right: 5%;
    }

    @media (min-width: 320px) {

        .container-regis {
            height: 750px;
            position: relative;
        }

        .card-regis {
            width: 300px;
            background-color: #ffffff;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border-radius: 10px;
        }

        .form-group-user {
            margin-top: 5%;
        }

        .regis {
            margin-left: 2%;
        }

        .form-group-user {
            margin-left: 2%;
        }

        .form-group-full {
            margin-left: 2%;
        }

        .form-group-email {
            margin-left: 2%;
        }

        .form-group-pass {
            margin-left: 2%;
        }

        .form-group-conpass {
            margin-left: 2%;
        }

        .btn-primary {
            width: 250px;
            margin-right: 5%;
        }
    }

</style>