import { useState, useEffect } from 'react';
import { getBorrowedBooks } from '../services/BorrowService';
import Loader from '../components/Loader';
import './MyBooks.css';

const MyBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const data = await getBorrowedBooks();
        setBooks(data);
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
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
                    loading ?
                        null
                        :
                        <div className='centered-message'>
                            <h1>Vous n'avez pas d'emprunts en cours !</h1>
                        </div>

            }
            {
                loading ?
                    <div className='spinner-container-centered'>
                        <Loader visible={loading} />
                    </div>
                    :
                    null
            }
        </div>
    );
};

export default MyBooks;