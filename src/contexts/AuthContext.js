import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: localStorage.getItem('jwt') });

    const setAuthData = (token) => {
        if (token)
            localStorage.setItem('jwt', token);
        else
            localStorage.removeItem('jwt');
        setAuth({ token });
    };

    return (
        <AuthContext.Provider value={{ auth, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;