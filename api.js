import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.156:5001/api",
    headers: {
        "Content-Type": "application/json",
    },
    
});

class Api {

    async login(phone, password) {
        return await api.post("/auth/v1/login", {
            phone,
            password
        });
    }

    async signup(name, phone, mail,password, status, photourl) {
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