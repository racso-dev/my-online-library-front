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
import UserListPage from "../pages/UserList";
import ProfilePage from '../pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from '../components/PrivateRoute';
import AdminRoute from '../components/AdminRoute';
import MyAccount from '../pages/MyAccount';
import MyBooks from '../pages/MyBooks';
import AdminDashboard from '../pages/AdminDashboard';
import TextDashboard from '../pages/TextDashboard';

export const Pages = {
    MAIN: '/',
    CATEGORIES: '/categories',
    OUR_BOOKS: '/nos-livres',
    HOURS: '/horaires',
    RULES: '/reglement',
    CONNECTION: '/connexion',
    REGISTER: '/inscription',
    USER_LIST: '/user-list',
    MY_ACCOUNT: '/mon-compte',
    PROFILE: '/profil',
    MY_BOOKS: '/mes-livres',
    ADMIN_DASHBOARD: '/admin-dashboard',
    TEXT_DASHBOARD: '/text-dashboard',
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
                <Route path={Pages.MY_ACCOUNT} element={
                    <PrivateRoute>
                        <MyAccount />
                    </PrivateRoute>
                } />
                <Route path={Pages.PROFILE} element={
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                } />
                <Route path={Pages.MY_BOOKS} element={
                    <PrivateRoute>
                        <MyBooks />
                    </PrivateRoute>
                } />
                <Route path={Pages.ADMIN_DASHBOARD} element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                } />
                <Route path={Pages.USER_LIST} element={
                    <AdminRoute>
                        <UserListPage />
                    </AdminRoute>
                } />
                <Route path={Pages.TEXT_DASHBOARD} element={
                    <AdminRoute>
                        <TextDashboard />
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