import { useState, useEffect } from 'react';
import { requestApi } from '../services/ApiService';
import Form from "react-bootstrap/Form";
import './Admin.css';

// Admin page component allowing to search users by firstName, lastName, email or activation status
const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [queries, setQueries] = useState('');
    const [firstNameFilter, setFirstNameFilter] = useState('');
    const [lastNameFilter, setLastNameFilter] = useState('');
    const [emailFilter, setEmailFilter] = useState('');
    const [activatedFilter, setActivatedFilter] = useState(false);

    const fetchData = async () => {
        setQueries(`firstName=${firstNameFilter}&lastName=${lastNameFilter}&email=${emailFilter}&activated=${activatedFilter}`);
        const data = await requestApi('GET', `/users?${queries}`);
        setUsers(data);
    };

    const handler = (event) => {
        event.preventDefault();
        fetchData();
    };

    useEffect(() => {
        fetchData();
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
                                fetchData();
                            }} />
                    </Form.Group>
                    <Form.Group className="form" controlId="lastName">
                        <Form.Label className="form-label">Nom</Form.Label>
                        <Form.Control className="form-input" type="text" value={lastNameFilter}
                            onChange={(e) => {
                                setLastNameFilter(e.target.value);
                                fetchData();
                            }} />
                    </Form.Group>
                    <Form.Group className="form" controlId="email">
                        <Form.Label className="form-label">Email</Form.Label>
                        <Form.Control className="form-input" type="text" value={emailFilter}
                            onChange={(e) => {
                                setEmailFilter(e.target.value);
                                fetchData();
                            }} />
                    </Form.Group>
                    <Form.Group className="form" controlId="activated">
                        <Form.Label className="form-label">Activé</Form.Label>
                        <Form.Control className="form-input" as="select" value={activatedFilter}
                            onChange={(e) => {
                                setActivatedFilter(e.target.value);
                                fetchData();
                            }}>
                            <option value={true}>Oui</option>
                            <option value={false}>Non</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
            <div className='users'>
                {users.map((user) => (
                    <div key={user.id} className="user">
                        <div>{user.firstName} {user.lastName}</div>
                        <div>{user.email}</div>
                        <div>{user.activated ? 'Activé' : 'Désactivé'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPage;