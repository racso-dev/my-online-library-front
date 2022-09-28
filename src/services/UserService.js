import { requestApi } from './ApiService';

export const getUser = async () => {
    const response = await requestApi('GET', '/user/self');
    return response;
};

export const updateUser = async (body) => {
    const response = await requestApi('PUT', '/user/self', body);
    return response;
};

export const switchUserActivation = async (userId) => {
    const response = await requestApi('POST', `/user/activate/${userId}`);
    return response;
};
