import { requestApi } from './ApiService';
import { BOOK_CATEGORIES } from '../pages/Ourbooks';

export const getBooks = async (category) => {
    const endpoint = Object.values(BOOK_CATEGORIES).find((c) => c.SLUG === category)?.ENDPOINT;
    const response = await requestApi('GET', `/book?category=${endpoint}`);
    return response;
};