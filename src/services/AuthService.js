import { requestApi } from './ApiService';

export const signIn = async (email, password) => {
    const response = await requestApi('POST', '/users/login', {
        email,
        password,
    });
    localStorage.setItem('jwt', response.data.token);
};

export const signUp = async (email, password) => {
    const response = await requestApi('POST', '/api/users/register', {
        email,
        password,
    });
    localStorage.setItem('jwt', response.data.token);
};

export const signOut = () => {
    localStorage.removeItem('jwt');
};