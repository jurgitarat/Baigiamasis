import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/global';
export const LoginPage = ({ onLogin }) => {
    const [Status, setStatus] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const doLogin = (e) => {
        e.preventDefault();
        setStatus("Prisijungiama");
        fetch(BASE_URL + 'login', {
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error();
                else return res.json();
            })
            .then((data) => {
                console.log(data);
                if (data.token) {
                    onLogin(data.token);
                    navigate('/')
                }
                else {
                    setStatus("Blogas serverio atsakymas");
                }
            })
            .catch((error) => {
                setStatus("Prisijungti nepavyko");
            });
    }
    const handleUChange = (e) => setUsername(e.target.value);
    const handlePChange = (e) => setPassword(e.target.value);
    return (
        <div>
            <h1>Prisijungimas</h1>

            <div>
                <form onSubmit={doLogin} >
                    <fieldset>
                        <label> Prisijungimo vardas</label><input id="Username" name="Username" onChange={handleUChange} /><br />
                        <label> Slaptažodis</label><input type="password" id="Password" name="Password" onChange={handlePChange} /><br />
                        <input type="submit" value="Prisijungti" />
                    </fieldset>
                </form>
            </div>
            {Status && <p className='notification'>{Status}</p>}
        </div>
    )
}
export default LoginPage;