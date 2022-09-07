import { Axios } from 'axios';

export const signIn = async (email, password) => {
    const response = await Axios.post('/api/users/login', {
        email,
        password,
    });
    localStorage.setItem('jwt', response.data.token);
}

export const signUp = async (email, password) => {
    const response = await Axios.post('/api/users/register', {
        email,
        password,
    });
    localStorage.setItem('jwt', response.data.token);
}

export const signOut = () => {
    localStorage.removeItem('jwt');
}