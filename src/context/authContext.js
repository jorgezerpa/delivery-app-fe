import React from 'react'

const defaultValue = {
    setLoggedToken: null,
    loggedToken: null,
};

const AuthContext = React.createContext(defaultValue);

export default AuthContext;
