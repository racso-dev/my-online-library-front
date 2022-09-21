import { Navigate } from "react-router-dom";
import { Pages } from '../routes/AppRouter';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('jwt');
    return token ? children : <Navigate to={Pages.CONNECTION} />;
};

export default PrivateRoute;