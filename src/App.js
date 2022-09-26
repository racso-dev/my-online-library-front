import React from 'react';
import AppRouter from "./routes/AppRouter";
import './App.css';

export const toastOptions = {
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
};

const App = () => {
    return (
        <AppRouter />
    );
};

export default App;
