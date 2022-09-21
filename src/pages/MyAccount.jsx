import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pages } from '../routes/AppRouter';
import { AuthContext } from '../contexts/AuthContext';
import MenuItem from '../components/MenuItem';
import './MyAccount.css';

const MyAccount = () => {
    const navigate = useNavigate();
    const { setAuthData, setUserData } = useContext(AuthContext);

    return (
        <div className='menu'>
            <MenuItem title='Mon profil' className='menu-item' onClick={() => navigate(Pages.PROFILE)} />
            <MenuItem title='Mes emprunts' className='menu-item' onClick={() => navigate(Pages.MY_BOOKS)} />
            <MenuItem title='Se déconnecter' className='menu-item disconnect' onClick={() => {
                setAuthData(null);
                setUserData(null);
                navigate(Pages.MAIN);
            }} />
        </div>
    );
};

export default MyAccount;