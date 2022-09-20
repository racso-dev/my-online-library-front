import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';

import './AppBar.css';
import { Pages } from '../routes/AppRouter';
import ProfileLogo from '../assets/profile.png';

const AppBar = () => {
    const checkLoggedIn = () => {
        const token = localStorage.getItem('jwt');
        return token ? true : false;
    };
    const [isLogged, setIsLogged] = React.useState(false);

    React.useEffect(() => {
        setIsLogged(checkLoggedIn());
    }, []);

    return (
        <Navbar className='app-navbar'>
            <Navbar.Brand href="/">
                <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt="logo" />
                <h1> MyBouquins </h1>
            </Navbar.Brand>
            <Nav className="nav">
                <Nav.Link className="hover-lined" href={Pages.MAIN}>Accueil</Nav.Link>
                <Nav.Link className="hover-lined" href={Pages.OUR_BOOKS}>Nos Livres</Nav.Link>
                <Nav.Link className="hover-lined" href={Pages.HOURS}>Horaires</Nav.Link>
                <Nav.Link className="hover-lined" href={Pages.RULES}>Règlement</Nav.Link>
                {
                    isLogged ?
                        <Nav.Link className='logo' href={Pages.PROFILE}><img className='logo' src={ProfileLogo} alt="profile_logo"></img></Nav.Link>
                        :
                        <Nav.Link className="hover-lined" href={Pages.CONNECTION}>Connexion</Nav.Link>
                }
            </Nav>
        </Navbar>
    );
};

export default AppBar;