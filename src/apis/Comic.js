import Api from './Api';

export default {
    auth() {
        return Api().get("/comic/8");
    },

    comment() {
        return Api().get("/comment");
    },

    author() {
        return Api().get("/authors");
    }
};