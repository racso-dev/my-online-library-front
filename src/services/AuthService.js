const axios = require('axios');

export const signIn = async (email, password) => {
    const response = await axios.post('/api/users/login', {
        email,
        password,
    });
    localStorage.setItem('jwt', response.data.token);
}

export const signUp = async (email, password) => {
    const response = await axios.post('/api/users/register', {
        email,
        password,
    });
    localStorage.setItem('jwt', response.data.token);
}

export const signOut = () => {
    localStorage.removeItem('jwt');
}