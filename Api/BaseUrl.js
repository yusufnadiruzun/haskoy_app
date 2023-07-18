import axios from "axios";
const api = axios.create({
    //baseURL: "http://10.0.2.2:5001/api",
    baseURL:"http://13.53.197.4:5001/api",
    Headers: {
        "Content-Type": "application/json",
    },
    
});

export default api;