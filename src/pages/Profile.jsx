import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import * as UserService from '../services/UserService';
import { toast } from 'react-toastify';
import { toastOptions } from "../App";
import "./Profile.css";

const ProfilePage = () => {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");

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
        const data = await UserService.getUser();
        setEmail(data.login);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setNewEmail(data.login);
        setNewFirstName(data.firstName);
        setNewLastName(data.lastName);
    };

    const handler = async (event) => {
        event.preventDefault();
        const res = await UserService.updateUser(
            {
                login: newEmail,
                newPassword,
                firstName: newFirstName,
                lastName: newLastName
            }
        );
        if (res.status === 204) {
            toast.success("Profil mis à jour avec succès", toastOptions);
        } else {
            toast.error("Erreur lors de la mise à jour du profil", toastOptions);
        }
        await fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
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
                    <Form.Control className="form-input" type="password" value={newPassword} placeholder="********" onChange={(e) => setNewPassword(e.target.value)} />
                </Form.Group>
                <Button className="button" type="submit" disabled={!validate()}> Enregistrer </Button>
            </Form>
        </div>
    );
};

export default ProfilePage;