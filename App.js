import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthCode from './components/AuthCode';
import Login from './components/Login';
import Logout from './components/Logout';
import Top from './components/Top';
import { isLoggedIn } from './utils/auth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth-code" element={isLoggedIn() ? <AuthCode /> : <Navigate to="/login" />} />
        <Route path="/top" element={isLoggedIn() ? <Top /> : <Navigate to="/login" />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
