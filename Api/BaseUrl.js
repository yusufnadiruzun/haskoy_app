import axios from "axios";
const api = axios.create({
    //baseURL: "http://10.0.1.2:5001/api",
    baseURL:"http://51.20.253.38:5001/api",
    Headers: {
        "Content-Type": "application/json",
    },
    
});

export default api;