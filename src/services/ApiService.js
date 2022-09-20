const API_BASE_URL = '/api';

export const requestApi = async (method, endpoint, body) => {

    try {
        const jwt = localStorage.getItem('jwt');
        const url = API_BASE_URL + endpoint;
        const headers = jwt ?
            {
                'Authorization': 'Bearer ' + jwt,
                'Content-Type': 'application/json'
            } :
            {
                'Content-Type': 'application/json'
            };
        const res = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body),
        });
        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }

};