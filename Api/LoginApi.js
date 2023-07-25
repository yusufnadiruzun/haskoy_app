
import api from "./BaseUrl";

class LoginApi {

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
   
}


export default new LoginApi();