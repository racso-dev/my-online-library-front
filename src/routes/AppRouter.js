import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import MainPage from "../pages";
import CategoriesPage from '../pages/Categories';
import OurbooksPage, { BookCategories } from '../pages/Ourbooks';
import HoursPage from '../pages/Hours';
import RulesPage from '../pages/Rules';
import AppBar from "../components/AppBar";
import ConnexionPage from "../pages/Connection";
import RegisterPage from "../pages/Register";
import AdminPage from "../pages/Admin";
import ProfilePage from '../pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from '../components/PrivateRoute';
import AdminRoute from '../components/AdminRoute';

export const Pages = {
    MAIN: '/',
    CATEGORIES: '/categories',
    OUR_BOOKS: '/nos-livres',
    HOURS: '/horaires',
    RULES: '/reglement',
    CONNECTION: '/connexion',
    REGISTER: '/inscription',
    ADMIN: '/admin',
    PROFILE: '/profil',
};

const AppRouter = () => {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route path={`${Pages.OUR_BOOKS}/${BookCategories.LITERATURE}`} element={
                    <PrivateRoute>
                        <CategoriesPage category={BookCategories.LITERATURE} />
                    </PrivateRoute>
                } />
                <Route path={`${Pages.OUR_BOOKS}/${BookCategories.COMICS}`} element={
                    <PrivateRoute>
                        <CategoriesPage category={BookCategories.COMICS} />
                    </PrivateRoute>

                } />
                <Route path={`${Pages.OUR_BOOKS}/${BookCategories.UTILITY}`} element={
                    <PrivateRoute>
                        <CategoriesPage category={BookCategories.UTILITY} />
                    </PrivateRoute>

                } />
                <Route path={`${Pages.OUR_BOOKS}/${BookCategories.CHILDREN}`} element={
                    <PrivateRoute>
                        <CategoriesPage category={BookCategories.CHILDREN} />
                    </PrivateRoute>

                } />
                <Route path={Pages.OUR_BOOKS} element={
                    <PrivateRoute>
                        <OurbooksPage />
                    </PrivateRoute>
                } />
                <Route path={Pages.PROFILE} element={
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                } />
                <Route path={Pages.ADMIN} element={
                    <AdminRoute>
                        <AdminPage />
                    </AdminRoute>
                } />
                <Route path={Pages.CONNECTION} element={<ConnexionPage />} />
                <Route path={Pages.REGISTER} element={<RegisterPage />} />
                <Route path={Pages.HOURS} element={<HoursPage />} />
                <Route path={Pages.RULES} element={<RulesPage />} />
                <Route path="*" element={<MainPage />} />
            </Routes>
            <ToastContainer />
        </Router>
    );
};

export default AppRouter;