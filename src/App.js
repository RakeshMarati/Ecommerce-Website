import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductFilter from './components/ProductFilter';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // Check if the user is logged in by fetching from localStorage on component mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route
              path="/signin"
              element={!user ? <SignIn setUser={setUser} /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp setUser={setUser} /> : <Navigate to="/" />}
            />
            <Route
              path="/"
              element={user ? (
                <>
                  <ProductFilter />
                  <ProductGrid />
                </>
              ) : (
                <Navigate to="/signin" />
              )}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
