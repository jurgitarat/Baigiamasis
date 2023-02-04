import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navi.css';

export const Navigation = (user) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        user.onLogin(null);
        navigate('/login');
    };

    //const location = useLocation();
    if (!user.token) {
        return (
            <div className='navigacija'>
                <img src="https://app.outboundsales.io/api/logo/acme.com" alt="logo" />
                <Link to="/Register">Registracija</Link>
                <Link to="/Login">Prisijungimas</Link>
            </div>)
    }
    return (
        <div className='navigacija'>

            <img src="https://app.outboundsales.io/api/logo/acme.com" alt="logo" />
            {<Link to="/">Sąrašas</Link>}
            <Link to="/Add">Naujas</Link>
            <button onClick={() => handleLogout()}>Atsijungti</button>
        </div>
    )
}

