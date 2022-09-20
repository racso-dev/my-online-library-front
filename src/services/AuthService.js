import { requestApi } from './ApiService';

export const signIn = async (email, password) => {
    const response = await requestApi('POST', '/auth/login', {
        login: email,
        password,
    });
    localStorage.setItem('jwt', response.token);
    document.location.reload();
};

export const signUp = async (email, password, firstName, lastName) => {
    const response = await requestApi('POST', '/auth/register', {
        login: email,
        password,
        firstName,
        lastName,
    });
    localStorage.setItem('jwt', response.token);
};

export const signOut = () => {
    localStorage.removeItem('jwt');
};