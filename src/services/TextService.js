import { requestApi } from './ApiService';

export const getPageText = async (page) => {
    const response = await requestApi('GET', `/text?page=${page}`);
    return response.content;
};

export const updatePageText = async (page, text) => {
    const response = await requestApi('PUT', `/text`, { page, content: text });
    return response;
};