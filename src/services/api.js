import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8083/api/employee'
});

export default api;