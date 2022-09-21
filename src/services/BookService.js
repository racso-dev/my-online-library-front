import { requestApi } from './ApiService';

const english = {
    "litterature": "literature",
    "bande-dessinee": "comics",
    "utilitaire": "utility",
    "livre-pour-enfant": "children",
};

export const getBooks = async (category) => {
    const response = await requestApi('GET', `/book?category=${english[category]}`);
    return response;
};