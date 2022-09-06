import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';

import './AppBar.css'

const AppBar = () => {
    return (
        <Navbar className='app-navbar'>
            <Navbar.Brand href="/" style={{ marginLeft: 25 }} >
                <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt="logo" style={{ maxHeight: "3rem" }} />
                <h1> MyBouqins </h1>
            </Navbar.Brand>
            <Nav style={{ marginLeft: "auto", marginRight: "3em" }}>
                <Nav.Link className="hover-lined" href="/" style={{ fontSize: "1.25em", marginLeft: 15 }}>Accueil</Nav.Link>
                <Nav.Link className="hover-lined" href="/categories" style={{ fontSize: "1.25em", marginLeft: 15 }}>Catégories</Nav.Link>
                <Nav.Link className="hover-lined" href="/noslivres" style={{ fontSize: "1.25em", marginLeft: 15 }}>Nos Livres</Nav.Link>
                <Nav.Link className="hover-lined" href="/horaires" style={{ fontSize: "1.25em", marginLeft: 15 }}>Horaires</Nav.Link>
                <Nav.Link className="hover-lined" href="/reglement" style={{ fontSize: "1.25em", marginLeft: 15 }}>Règlement</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default AppBar;