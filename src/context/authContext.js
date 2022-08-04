import React from 'react'

const defaultValue = {
    setLoggedToken: null,
    loggedToken: null,
    clusters: [],
    myOrders: [],
};

const AuthContext = React.createContext(defaultValue);

export default AuthContext;
