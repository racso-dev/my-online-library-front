import './Auth.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Pages } from "../routes/AppRouter";
import { signIn } from '../services/AuthService';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { toastOptions } from '../App';
import { getUser } from '../services/UserService';
import FormItem from '../components/FormItem';

const ConnexionPage = () => {
    const { setAuthData, setUserData } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validate = () => (email.length > 0 && password.length > 0);
    const handler = async (event) => {
        event.preventDefault();
        const res = await signIn(email, password);
        if (!res.token) {
            toast.error(res.message, toastOptions);
        } else {
            setAuthData(res.token);
            const user = await getUser();
            setUserData(user);
            navigate(Pages.OUR_BOOKS);
        }
    };
    return (
        <div className="connexion">
            <Form onSubmit={handler}>
                <FormItem label="Email" value={email} onChange={(e) => setEmail(e.target.value)} controlId='email' type='email' />
                <FormItem label="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} controlId='password' type='password' />
                <Button className="button" type="submit" disabled={!validate()}> Connexion </Button>
            </Form>
            <a href={Pages.REGISTER}> Pas encore de compte ? Rendez-vous ici !</a>
        </div>
    );
};

export default ConnexionPage;
