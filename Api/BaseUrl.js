import axios from "axios";
const api = axios.create({
    //baseURL: "http://10.0.2.2:5001/api",
    baseURL:"http://16.171.153.153:5001/api",
    Headers: {
        "Content-Type": "application/json",
    },
    
});

export default api;