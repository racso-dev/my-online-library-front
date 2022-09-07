const axios = require('axios');

const Books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        sumup: 'Harry Potter and the Chamber of Secrets begins the sixth year of Harry\'s second year at Hogwarts School of Witchcraft and Wizardry.',
        publicationDate: '1998',
        image: 'https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855669.jpg'
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        sumup: 'Harry Potter and the Prisoner of Azkaban begins the seventh year of Harry\'s second year at Hogwarts School of Witchcraft and Wizardry.',
        publicationDate: '1999',
        image: 'https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855669.jpg'
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        sumup: 'Harry Potter and the Goblet of Fire begins the eighth year of Harry\'s second year at Hogwarts School of Witchcraft and Wizardry.',
        publicationDate: '2000',
        image: 'https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855669.jpg'
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        sumup: 'Harry Potter and the Order of the Phoenix begins the ninth year of Harry\'s second year at Hogwarts School of Witchcraft and Wizardry.',
        publicationDate: '2001',
        image: 'https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855669.jpg'
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        sumup: 'Harry Potter and the Half-Blood Prince begins the tenth year of Harry\'s second year at Hogwarts School of Witchcraft and Wizardry.',
        publicationDate: '2002',
        image: 'https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855669.jpg'
    },
    {
        title: 'Harry Potter and the Deathly Hallows',
        sumup: 'Harry Potter and the Deathly Hallows begins the eleventh year of Harry\'s second year at Hogwarts School of Witchcraft and Wizardry.',
        publicationDate: '2003',
        image: 'https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855669.jpg'
    }
];

export const getBooks = async (category) => {
    // const response = await axios.get(`/api/books?category=${category}`);
    // return response.data;
    return Books;
};