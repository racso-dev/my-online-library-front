import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import BookModal from '../components/BookModal';
import { getBooks } from '../services/BookService';
import "./Categories.css";

const CategoriesPage = ({ category }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBooks(category);
            setBooks(data);
        };
        fetchData();
    }, []);

    return (
        <div className="grid">
            {
                books.map(book => (
                    <div key={book.id}>
                        <img src={book.image} alt={book.title + "_image"} />
                        <h1>{book.title}</h1>
                        <h2>{book.publicationDate}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default CategoriesPage;
