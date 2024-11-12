import axios, {AxiosInstance} from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const httpClient:AxiosInstance = axios.create({
    baseURL,
    timeout: 10000,

})