import { Navigate } from "react-router-dom";
import { Pages } from '../routes/AppRouter';

const AdminRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.role === 'ADMIN' ? children : <Navigate to={Pages.CONNECTION} />;
};

export default AdminRoute;