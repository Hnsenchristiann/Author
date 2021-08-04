import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import ComicView from './components/ComicView.vue'
import ComicDetails from './components/ComicDetails.vue'
import ArView from './components/ArView.vue'
import Regis from './components/Regis.vue'
import SignIn from './components/SignIn.vue'
import Author from './components/Author.vue'
import Search from './components/Search.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
       path: '/home',
       name: 'Home',
        meta: {
           default: true,
           title: 'Home',
        },
        component: Home
    },

    {
        path: '/',
        name: 'Login',
        meta: {
            default: true,
            title: 'Login',
        },
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            default: true,
            title: 'Dashboard',
        },
        component: Dashboard
    },
    {
        path: '/view',
        name: 'Kara',
        meta: {
            default: true,
            title: 'Kara',
        },
        component: ComicView
    },
    {
        path: '/details/:id',
        name: 'BookDetail',
        meta: {
            default: true,
            title: 'Book Detail',
        },
        component: ComicDetails
    },
    {
        path: '/ar/:scene',
        name: 'AR View',
        meta: {
            default: true,
            title: 'AR View',
        },
        component: ArView
    },
    {
        path: '/signin',
        name: 'Sign In',
        meta: {
            title: 'Sign In',
        },
        component: SignIn
    },
    {
        path: '/regis',
        name: 'Regis',
        meta: {
            title: 'Regis',
        },
        component: Regis
    },
    {
        path: '/author/:id',
        name: 'Author',
        meta: {
            title: 'Author',
        },
        component: Author
    },
    {
        path: '/search',
        name: 'Search',
        meta: {
            title: 'Search Page',
        },
        component: Search
    },
]

const Route = createRouter({
    history: createWebHistory(),
    routes,
});

function isLoggedIn() {
    return localStorage.getItem('token');
}

Route.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        if (!isloggedIn()) {
            next({
                path: '/signin',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        if (isloggedIn()) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    }
        else {
        next() // make sure to always call next()!
    }
})



export default Route