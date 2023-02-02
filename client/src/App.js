import React from 'react';
import { useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { RouteSuspense } from './components/RouteSuspense/RouteSuspense';
import { Navigation } from './components/navi/navi';
const List = React.lazy(() => import('./views/List/List'));
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));
const AddPage = React.lazy(() => import('./views/AddPage/AddPage'));
const RegisterPage = React.lazy(() => import('./views/RegisterPage/RegisterPage'));
function App() {
  const [userToken, setUserToken] = useState(null);
  const handleLogin = (token) => {
    setUserToken(token)
  };
  return (
    <div className="App">
      <Navigation token={userToken} />
      <Routes>
        <Route path="/" element={

          <RouteSuspense>
            <List token={userToken} />

          </RouteSuspense>
        } />
        <Route path="/register" element={

          <RouteSuspense>
            <RegisterPage />

          </RouteSuspense>
        } />
        <Route path="/login" element={

          <RouteSuspense>
            <LoginPage onLogin={handleLogin} />

          </RouteSuspense>

        } />
        <Route path="/add" element={

          <RouteSuspense>
            <AddPage token={userToken} />

          </RouteSuspense>

        } />
      </Routes>




    </div>
  );
}

export default App;