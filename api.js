import axios from "axios";

const api = axios.create({
    //baseURL: "http://10.0.2.2:5001/api",
    baseURL:"http://13.53.197.4:5001/api",
    Headers: {
        "Content-Type": "application/json",
    },
    
});

class Api {

    async login(user) {
        const {phone, password,usertoken} = user;
        console.log(phone, password,usertoken)
        return await api.post("/auth/v1/login", {
            phone,
            password,
            usertoken
        });
    }

    async signup(user) {
        const {name,surname ,phone, mail,password, status, photourl} = user;
        return await api.post("/auth/v1/signup", {
            name,
            surname,
            phone,
            password,
            mail,
            status,
            photourl

        });
    }
    async getUserPermissions(usertoken) {
        
        console.log(usertoken)
        return await api.post("/permission/v1/permissionControl", {
            usertoken
        });
    }

}

export default new Api();