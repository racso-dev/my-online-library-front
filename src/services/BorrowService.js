import { requestApi } from './ApiService';

export const getBorrowedBooks = async () => {
    const response = await requestApi('GET', '/borrow/self');
    return response || [];
};

export const borrowBook = async (bookId) => {
    const response = await requestApi('POST', `/borrow?bookId=${bookId}`);
    return response;
};