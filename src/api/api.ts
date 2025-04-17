import axios from 'axios';

const api = axios.create({
    baseURL: 'https://services.retailcompass.com/api/pricing/v1/'
});

api.interceptors.request.use(
    (config) => {
        config.headers['apikey'] = import.meta.env.VITE_API_KEY;
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
