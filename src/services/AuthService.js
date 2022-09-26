import { requestApi } from './ApiService';

export const signIn = async (email, password) => {
    const response = await requestApi('POST', '/auth/login', {
        login: email,
        password,
    });
    return response;
};

export const signUp = async (email, password, firstName, lastName) => {
    const response = await requestApi('POST', '/auth/register', {
        login: email,
        password,
        firstName,
        lastName,
    });
    return response;
};