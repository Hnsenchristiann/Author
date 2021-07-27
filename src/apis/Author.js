import Api from './Api';

export default {
    get(id) {
        return Api().get("/author/" + id);
    }
};