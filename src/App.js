import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

//Pages
import MainPage from "./pages";
import CategoriesPage from './pages/categories';
import OurbooksPage from './pages/ourbooks';
import NotFoundPage from './pages/404';
import HoursPage from './pages/hours';
import RulesPage from './pages/rules';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/noslivres" element={<OurbooksPage />} />
                <Route path="/horaires" element={<HoursPage />} />
                <Route path="/reglement" element={<RulesPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
