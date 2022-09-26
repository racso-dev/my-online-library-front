import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { toast } from 'react-toastify';
import { toastOptions } from "../App";
import { requestApi } from '../services/ApiService';
import './Admin.css';
import { switchUserActivation } from '../services/UserService';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [firstNameFilter, setFirstNameFilter] = useState('');
    const [lastNameFilter, setLastNameFilter] = useState('');
    const [emailFilter, setEmailFilter] = useState('');
    const [activatedFilter, setActivatedFilter] = useState(true);
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({});
    const fetchData = async (state) => {
        const query =
            (`activated=${state.activated}`) +
            (state.firstName ? `&firstName=${state.firstName}` : '') +
            (state.lastName ? `&lastName=${state.lastName}` : '') +
            (state.email ? `&email=${state.email}` : '');
        const endpoint = '/user?' + query;
        const data = await requestApi('GET', endpoint);
        setUsers(data);
    };

    const handler = (event) => {
        event.preventDefault();
    };

    const handleClose = () => setShow(false);
    const handleShow = (user) => {
        setUser(user);
        setShow(true);
    };

    const handleActivation = async (user, activateAction) => {
        const res = await switchUserActivation(user.id);
        if (res.status === 204) {
            toast.success(`Utilisateur ${activateAction ? 'activé' : 'désactivé'}`, toastOptions);
            setUsers(users.filter((u) => u.id !== user.id));
        } else {
            toast.error(`Erreur lors de ${activateAction ? "l'activation" : 'la désactivation'} de l'utilisateur`, toastOptions);
        }
        handleClose();
    };
    useEffect(() => {
        fetchData({
            firstName: firstNameFilter,
            lastName: lastNameFilter,
            email: emailFilter,
            activated: activatedFilter
        });
    }, []);
    return (
        <div className='admin'>
            <div className="search">
                <Form className="form-container" onSubmit={handler}>
                    <Form.Group className="form" controlId="firstName">
                        <Form.Label className="form-label">Prénom</Form.Label>
                        <Form.Control className="form-input" type="text" value={firstNameFilter}
                            onChange={(e) => {
                                setFirstNameFilter(e.target.value);
                                fetchData({
                                    firstName: e.target.value,
                                    lastName: lastNameFilter,
                                    email: emailFilter,
                                    activated: activatedFilter
                                });
                            }} />
                    </Form.Group>
                    <Form.Group className="form" controlId="lastName">
                        <Form.Label className="form-label">Nom</Form.Label>
                        <Form.Control className="form-input" type="text" value={lastNameFilter}
                            onChange={(e) => {
                                setLastNameFilter(e.target.value);
                                fetchData({
                                    firstName: firstNameFilter,
                                    lastName: e.target.value,
                                    email: emailFilter,
                                    activated: activatedFilter
                                });
                            }} />
                    </Form.Group>
                    <Form.Group className="form" controlId="email">
                        <Form.Label className="form-label">Email</Form.Label>
                        <Form.Control className="form-input" type="text" value={emailFilter}
                            onChange={(e) => {
                                setEmailFilter(e.target.value);
                                fetchData({
                                    firstName: firstNameFilter,
                                    lastName: lastNameFilter,
                                    email: e.target.value,
                                    activated: activatedFilter
                                });
                            }} />
                    </Form.Group>
                    <Form.Group className="form" controlId="activated">
                        <Form.Label className="form-label">Activé</Form.Label>
                        <Form.Control className="form-input" as="select" value={activatedFilter}
                            onChange={(e) => {
                                setActivatedFilter(e.target.value);
                                fetchData({
                                    firstName: firstNameFilter,
                                    lastName: lastNameFilter,
                                    email: emailFilter,
                                    activated: e.target.value
                                });
                            }}>
                            <option value={true}>Oui</option>
                            <option value={false}>Non</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
            <div className='users'>
                {users.map((user) => (
                    <div key={user.id} className="user" onClick={() => handleShow(user)}>
                        <div>{user.firstName} {user.lastName}</div>
                        <div>{user.email}</div>
                        <div>{user.activated ? 'Activé' : 'Désactivé'}</div>
                    </div>
                ))}
            </div>
            {
                show ?
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Body>
                            <div className="modal-user-info">
                                <div>
                                    <div className="modal-user-info-label">Prénom</div>
                                    <div>{user.firstName}</div>
                                    <div className="modal-user-info-label">Nom</div>
                                    <div>{user.lastName}</div>
                                </div>
                                <div>
                                    <div className="modal-user-info-label">Email</div>
                                    <div>{user.login}</div>
                                    <div className="modal-user-info-label">Activé</div>
                                    <div>{user.activated ? 'Oui' : 'Non'}</div>
                                </div>

                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Fermer
                            </Button>
                            {
                                user.activated ?
                                    <Button variant="danger" onClick={() => handleActivation(user, false)}>
                                        Désactiver
                                    </Button>
                                    :
                                    <Button variant="success" onClick={() => handleActivation(user, true)}>
                                        Activer
                                    </Button>
                            }
                        </Modal.Footer>
                    </Modal>
                    :
                    null
            }
        </div >
    );
};

export default AdminPage;