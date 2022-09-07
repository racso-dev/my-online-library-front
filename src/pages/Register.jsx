import './Connection.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import { Pages } from "../routes/AppRouter";
import { signUp } from "../services/AuthService";

const ConnexionPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const validate = () => (validateEmail(email) && email.length > 0 && password.length > 0 && password === confirmationPassword);
    const handler = (event) => {
        event.preventDefault();
        signUp(email, password);
        window.location.href = Pages.OUR_BOOKS;
    };
    return (
        <div className="connexion">
            <Form onSubmit={handler}>
                <Form.Group className="form" controlId="email">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control className="form-input" type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="form" controlId="password">
                    <Form.Label className="form-label">Mot de passe</Form.Label>
                    <Form.Control className="form-input" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="form" controlId="confirmationPassword">
                    <Form.Label className="form-label">Mot de passe confirmation</Form.Label>
                    <Form.Control className="form-input" type="password" value={confirmationPassword}
                        onChange={(e) => setConfirmationPassword(e.target.value)} />
                </Form.Group>
                <Button className="button" type="submit" disabled={!validate()}> Inscription </Button>
            </Form>
            <a href={Pages.CONNECTION}> Déjà un compte ? Connecte-toi ici !</a>
        </div>
    );
}

export default ConnexionPage;
