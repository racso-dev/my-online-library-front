import { useNavigate } from 'react-router-dom';
import { Pages } from '../routes/AppRouter';
import MenuItem from '../components/MenuItem';
import './MyAccount.css';

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className='menu'>
            <MenuItem title='Dashboard utilisateurs' className='menu-item' onClick={() => navigate(Pages.USER_LIST)} />
            <MenuItem title='Dashboard textes' className='menu-item' onClick={() => navigate(Pages.TEXT_DASHBOARD)} />
        </div>
    );
};

export default AdminDashboard;