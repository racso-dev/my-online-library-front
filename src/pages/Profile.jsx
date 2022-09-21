import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "../routes/AppRouter";
import * as UserService from '../services/UserService';
import * as BorrowService from '../services/BorrowService';
import { toast } from 'react-toastify';
import { AuthContext } from "../contexts/AuthContext";
import "./Profile.css";
import { toastOptions } from "../App";

const ProfilePage = () => {
    const { setAuthData } = useContext(AuthContext);
    const [isMenu, setIsMenu] = useState(true);
    const [isProfile, setIsProfile] = useState(false);
    const [isBookList, setIsBookList] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("********");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");

    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    const validatePassword = () => (newPassword.length >= 8 && newPassword.length <= 15 && newPassword.match(/[a-z]/) && newPassword.match(/[A-Z]/) && newPassword.match(/[0-9]/) && newPassword.match(/[^a-zA-Z\d]/));
    const validateEmail = () => (newEmail !== email && newEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
    const validateFirstName = () => (newFirstName !== firstName && newFirstName.length > 2);
    const validateLastName = () => (newLastName !== lastName && newLastName.length > 2);

    const validate = () => (
        validatePassword() ||
        validateEmail() ||
        validateFirstName() ||
        validateLastName()
    );

    const fetchData = async () => {
        let data = await UserService.getUser();
        setEmail(data.login);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setNewEmail(data.login);
        setNewFirstName(data.firstName);
        setNewLastName(data.lastName);

        data = await BorrowService.getBorrowedBooks();
        setBooks(data);

    };

    const handler = async (event) => {
        event.preventDefault();
        const res = await UserService.updateUser(
            {
                login: newEmail,
                ...(password === "********" ? {} : { password }),
                firstName: newFirstName,
                lastName: newLastName
            }
        );
        if (res.status === 204)
            toast.success("Profil mis à jour avec succès", toastOptions);
        else
            toast.error("Erreur lors de la mise à jour du profil", toastOptions);
        await fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {
                isMenu ?
                    <div className='menu'>
                        <div className='menu-item' onClick={() => {
                            setIsMenu(false);
                            setIsProfile(true);
                            setIsBookList(false);
                        }}>
                            <h1>Mon profil</h1>
                        </div>
                        <div className='menu-item' onClick={() => {
                            setIsMenu(false);
                            setIsProfile(false);
                            setIsBookList(true);
                        }}>
                            <h1>Mes emprunts</h1>
                        </div>
                        <div className='menu-item disconnect' onClick={() => {
                            setAuthData(null);
                            navigate(Pages.MAIN);
                        }}>
                            <h1>Se déconnecter</h1>
                        </div>
                    </div>
                    :
                    null
            }
            {
                isProfile ?
                    <>
                        <div className='back' onClick={() => document.location.reload()}>
                            <h1>Retour</h1>
                        </div>
                        <div className="connexion">
                            <Form onSubmit={handler}>
                                <Form.Group className="form" controlId="email">
                                    <Form.Label className="form-label">Email</Form.Label>
                                    <Form.Control className="form-input" type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="form" controlId="firstName">
                                    <Form.Label className="form-label">Prénom</Form.Label>
                                    <Form.Control className="form-input" type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="form" controlId="lastName">
                                    <Form.Label className="form-label">Nom</Form.Label>
                                    <Form.Control className="form-input" type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="form" controlId="password">
                                    <Form.Label className="form-label">Mot de passe</Form.Label>
                                    <Form.Control className="form-input" type="password" value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setNewPassword(e.target.value);
                                        }} />
                                </Form.Group>
                                <Button className="button" type="submit" disabled={!validate()}> Enregistrer </Button>
                            </Form>
                        </div>
                    </>
                    :
                    null
            }
            {
                isBookList ?
                    <div className='borrowed'>
                        <div className='back' onClick={() => document.location.reload()}>
                            <h1>Retour</h1>
                        </div>
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
                    :
                    null
            }
        </>
    );
};

export default ProfilePage;