import api from "../api/api";

export const getProducts = async (params?: Record<string, any>) => {
    const { data } = await api.get('/products', { params });
    return data;
};
