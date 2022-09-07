import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import MainPage from "../pages";
import CategoriesPage from '../pages/Categories';
import OurbooksPage from '../pages/Ourbooks';
import HoursPage from '../pages/Hours';
import RulesPage from '../pages/Rules';
import AppBar from "../components/AppBar";
import ConnexionPage from "../pages/Connection";
import RegisterPage from "../pages/Register";

export const Pages = {
    MAIN: '/',
    CATEGORIES: '/categories',
    OUR_BOOKS: '/nos-livres',
    HOURS: '/horaires',
    RULES: '/reglement',
    CONNECTION: '/connexion',
    REGISTER: '/inscription'
};

const AppRouter = () => {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route path={Pages.MAIN} element={<MainPage />} />
                <Route path={`${Pages.CATEGORIES}/*`} element={<CategoriesPage />} />
                <Route path={Pages.OUR_BOOKS} element={<OurbooksPage />} />
                <Route path={Pages.HOURS} element={<HoursPage />} />
                <Route path={Pages.RULES} element={<RulesPage />} />
                <Route path={Pages.CONNECTION} element={<ConnexionPage />} />
                <Route path={Pages.REGISTER} element={<RegisterPage />} />
                <Route path="*" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;