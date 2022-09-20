import './Auth.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Pages } from "../routes/AppRouter";
import { signIn } from '../services/AuthService';

const ConnexionPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validate = () => (email.length > 0 && password.length > 0);
    const handler = (event) => {
        event.preventDefault();
        signIn(email, password);
        navigate(Pages.OUR_BOOKS);
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
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control className="form-input" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button className="button" type="submit" disabled={!validate()}> Connexion </Button>
            </Form>
            <a href={Pages.REGISTER}> Pas encore de compte ? Rendez-vous ici !</a>
        </div>
    );
};

export default ConnexionPage;
