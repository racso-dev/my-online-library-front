import './Auth.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { Pages } from "../routes/AppRouter";
import { signUp } from "../services/AuthService";
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { toastOptions } from '../App';
import { getUser } from '../services/UserService';
import FormItem from '../components/FormItem';

const RegisterPage = () => {
    const { setAuthData, setUserData } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const validatePassword = () => (password.length >= 8 && password.length <= 15 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z\d]/) && password === confirmationPassword);
    const validate = () => (validateEmail(email) && email.length > 0 && password.length > 0 && validatePassword());

    const handler = async (event) => {
        event.preventDefault();
        const res = await signUp(email, password, firstName, lastName);
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
                <FormItem label="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} controlId='lastName' />
                <FormItem label="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} controlId='firstName' />
                <FormItem label="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} controlId='password' type='password' />
                <FormItem label="Mot de passe confirmation" value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)} controlId='confirmationPassword' type='password' />
                <Button className="button" type="submit" disabled={!validate()}> Inscription </Button>
            </Form>
            <a href={Pages.CONNECTION}> Déjà un compte ? Connecte-toi ici !</a>
        </div>
    );
};

export default RegisterPage;
