import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import MainPage from "../pages";
import CategoriesPage from '../pages/Categories';
import OurbooksPage, { BOOK_CATEGORIES } from '../pages/Ourbooks';
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
                <Route path={`${Pages.OUR_BOOKS}/${BOOK_CATEGORIES.LITERATURE.SLUG}`} element={
                    <PrivateRoute>
                        <CategoriesPage category={BOOK_CATEGORIES.LITERATURE.SLUG} />
                    </PrivateRoute>
                } />
                <Route path={`${Pages.OUR_BOOKS}/${BOOK_CATEGORIES.COMICS.SLUG}`} element={
                    <PrivateRoute>
                        <CategoriesPage category={BOOK_CATEGORIES.COMICS.SLUG} />
                    </PrivateRoute>

                } />
                <Route path={`${Pages.OUR_BOOKS}/${BOOK_CATEGORIES.UTILITY.SLUG}`} element={
                    <PrivateRoute>
                        <CategoriesPage category={BOOK_CATEGORIES.UTILITY.SLUG} />
                    </PrivateRoute>

                } />
                <Route path={`${Pages.OUR_BOOKS}/${BOOK_CATEGORIES.CHILDREN.SLUG}`} element={
                    <PrivateRoute>
                        <CategoriesPage category={BOOK_CATEGORIES.CHILDREN.SLUG} />
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