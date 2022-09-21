import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    const [auth, setAuth] = useState({ token: localStorage.getItem('jwt') });

    const setAuthData = (token) => {
        if (token)
            localStorage.setItem('jwt', token);
        else
            localStorage.removeItem('jwt');
        setAuth({ token });
    };

    const setUserData = (user) => {
        if (user)
            localStorage.setItem('user', JSON.stringify(user));
        else
            localStorage.removeItem('user');
        setUser(user);
    };

    return (
        <AuthContext.Provider value={{ auth, setAuthData, user, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;