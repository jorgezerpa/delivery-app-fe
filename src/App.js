import React, { useState, useEffect } from "react";
import Layout from "./layouts/Layout";
import LoginAndRegister from "./pages/LoginAndRegister";
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Orders from './pages/Orders';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getCookie } from './utils/cookiesHandler';
import AuthContext from './context/authContext';

import io from 'socket.io-client';
const socket = io('http://localhost:3001');

function App() {
  const [loggedToken, setLoggedToken] = useState(getCookie('token'))
        //sockets
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [clusters, setClusters ] = useState([]); //clusters data
  const [myOrders, setMyOrders ] = useState([]); // my Orders

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      console.log('connected')
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });
    
    socket.on('clustersEvent', (clusters) => {
      setClusters(clusters)
    });
    socket.on('UnreserveEvent', (orders) => {
      setMyOrders(orders)
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  return (
    <AuthContext.Provider value={{ setLoggedToken, loggedToken, clusters, myOrders }} >
      <Router>
          <Layout>
            <Routes>
                <Route path="/login" element={loggedToken ? <Navigate to="/" /> : <LoginAndRegister />} />
                <Route exact path="/" element={!loggedToken ? <Navigate to="/login" /> : <Home />} />
                <Route exact path="/profile" element={!loggedToken ? <Navigate to="/login" /> : <Profile />} />
                <Route exact path="/orders" element={!loggedToken ? <Navigate to="/login" /> : <Orders />} />
            </Routes>
          </Layout>
        </Router>
    </AuthContext.Provider>
  );
}

export default App;
