const API_BASE_URL = '/api';

export const requestApi = async (method, endpoint, body) => {

    try {
        const jwt = localStorage.getItem('jwt');
        const url = API_BASE_URL + endpoint;
        if (process.env.NODE_ENV === 'development') {
            console.log(`[API] Request\nURL=${url}${body ? `\nBODY=${JSON.stringify(body)}\n` : ''}`);
        }
        const headers = jwt ?
            {
                'Authorization': 'Bearer ' + jwt,
                'Content-Type': 'application/json'
            } :
            {
                'Content-Type': 'application/json'
            };
        let res = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body),
        });
        if (res.status !== 204) {
            res = await res.json();
        }
        if (process.env.NODE_ENV === 'development') {
            console.log('[API] Response\n', res);
        }
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }

};