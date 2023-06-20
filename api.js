import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.2.2:5001/api",
    Headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    },
    
});

class Api {

    async login(user) {
        const {phone, password,usertoken} = user;
        return await api.post("/auth/v1/login", {
            phone,
            password,
            usertoken
        });
    }

    async signup(user) {
        const {name, phone, mail,password, status, photourl} = user;
        return await api.post("/auth/v1/signup", {
            name,
            phone,
            password,
            mail,
            status,
            photourl

        });
    }
}

export default new Api();