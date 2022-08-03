import React, { useState } from "react";
import Layout from "./layouts/Layout";
import LoginAndRegister from "./pages/LoginAndRegister";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getCookie } from './utils/cookiesHandler';
import AuthContext from './context/authContext';

function App() {
  const [loggedToken, setLoggedToken] = useState(getCookie('token'))

  return (
    <AuthContext.Provider value={{ setLoggedToken, loggedToken }} >
      <Router>
          <Layout>
            <Routes>
                <Route exact path="/" element={!loggedToken ? <Navigate to="/login" /> : <Home />} />
                <Route path="/login" element={loggedToken ? <Navigate to="/" /> : <LoginAndRegister />} />
            </Routes>
          </Layout>
        </Router>
    </AuthContext.Provider>
  );
}

export default App;
