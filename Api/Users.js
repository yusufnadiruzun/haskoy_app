import api from "./BaseUrl";

class UsersApi {

    async getUsers() {
        return await api.get("/user/v1/getStudents");
    }

}

export default new UsersApi();