import { useState, useEffect } from 'react';
import { getBorrowedBooks } from '../services/BorrowService';
import './MyBooks.css';

const MyBooks = () => {
    const [books, setBooks] = useState([]);

    const fetchData = async () => {
        const data = await getBorrowedBooks();
        setBooks(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='borrowed'>
            {
                books && books.length > 0 ?
                    <div className="grid">
                        {
                            books.map(book => (
                                <div key={book.id}>
                                    <div className='cover'>
                                        <img src={book.cover} alt={book.title + "_image"} />
                                    </div>
                                    <div className="book-info">
                                        <h1>{book.title}</h1>
                                        <h2>{book.publicationYear}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className='centered-message'>
                        <h1>Vous n'avez pas d'emprunts en cours !</h1>
                    </div>
            }
        </div>
    );
};

export default MyBooks;