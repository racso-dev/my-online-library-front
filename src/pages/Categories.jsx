import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getBooks } from '../services/BookService';
import "./Categories.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoriesPage = ({ category }) => {
    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);
    const [book, setBook] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBooks(category);
            setBooks(data);
        };
        fetchData();
    }, []);

    return (
        <>

            <div className="grid">
                {
                    books.map(book => (
                        <div className="book" key={book.id} onClick={() => {
                            setBook(book);
                            setShow(true);
                        }}>
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
            {show ?
                <Modal show={show} onHide={() => setShow(false)} size="lg">
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
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            Fermer
                        </Button>
                        <Button variant="primary" onClick={() => setShow(false)}>
                            Louer
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
