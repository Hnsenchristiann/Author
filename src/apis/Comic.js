import Api from './Api';

export default {
    get(id) {
        return Api().get("/comic/" + id);
    },

    comment() {
        return Api().get("/comment");
    },

    author() {
        return Api().get("/authors");
    }
};