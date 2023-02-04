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
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    setStatus(data.error);
                    onLogin(data.error);
                }
                else {
                    setStatus(data.msg);
                    onLogin(data.token);
                    navigate('/');
                }
            })
            .catch();
    }

    const handleUChange = (e) => setUsername(e.target.value);
    const handlePChange = (e) => setPassword(e.target.value);
    return (
        <div>
            <h1>Prisijungimas</h1>

            <div>
                <form onSubmit={doLogin} >
                    <fieldset>
                        <label for="Username"> Prisijungimo vardas</label><input id="Username" name="Username" onChange={handleUChange} /><br />
                        <label for="Password"> Slaptažodis</label><input type="password" id="Password" name="Password" onChange={handlePChange} /><br />
                        <input type="submit" value="Prisijungti" />
                    </fieldset>
                </form>
            </div>
            {Status && <p className='notification'>{Status}</p>}
        </div>
    )
}
export default LoginPage;