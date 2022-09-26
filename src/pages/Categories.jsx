import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getBooks } from '../services/BookService';
import { borrowBook } from '../services/BorrowService';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Categories.css';
import { toastOptions } from '../App';

const CategoriesPage = ({ category }) => {
    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);
    const [book, setBook] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (book) => {
        setBook(book);
        setShow(true);
    };
    const handleBorrow = async (book) => {
        setShow(false);
        const res = await borrowBook(book.id);
        if (res.status === 401) {
            toast.error("Vous n'êtes pas autorisé à emprunter de livre", toastOptions);
        } else {
            toast.success("Le livre a été emprunté avec succès", toastOptions);
            setBooks(books.filter(b => b.id !== book.id));
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBooks(category);
            setBooks(data);
        };
        fetchData();
    }, [category]);

    return (
        <>
            <div className="grid">
                {
                    books.map(book => (
                        <div className="book" key={book.id} onClick={() => handleShow(book)}>
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
            {
                show ?
                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header className='book-title'>
                            <Modal.Title>{book.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='cover-modal'>
                                <img src={book.cover} alt={book.title + "_image"} />
                            </div>
                            <div className="modal-book-info">
                                <h2>{book.sumup}</h2>
                                <h3>{book.publicationYear}</h3>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Fermer
                            </Button>
                            <Button variant="primary" onClick={() => handleBorrow(book)}>
                                Emprunter
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    :
                    null
            }
        </>
    );
};

export default CategoriesPage;
