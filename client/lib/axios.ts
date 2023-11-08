import axios from 'axios';

const API_URL = 'https://pt6nwdfr-8080.inc1.devtunnels.ms/';

axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: API_URL
})

export default instance