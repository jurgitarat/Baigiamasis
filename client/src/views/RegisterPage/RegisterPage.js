import React from 'react';
import { useState } from "react";
import { BASE_URL } from '../../constants/global';

export const RegisterPage = () => {
    const [Status, setStatus] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const submitForm = (e) => {
        e.preventDefault();
        fetch(BASE_URL + 'register', {
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
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
                if (data.insertId) {
                    setStatus("User created succesfully. ID: " + data.insertId);
                }
                else {
                    setStatus("Unexpected response from server");
                }
            })
            .catch((error) => {
                setStatus("Request had failed");
            });
    }
    const handleUChange = (e) => setUsername(e.target.value);
    const handlePChange = (e) => setPassword(e.target.value);
    const handleFChange = (e) => setFirstname(e.target.value);
    const handleLChange = (e) => setLastname(e.target.value);
    return (
        <div>
            <h1>Renginių organizatoriaus registracija</h1>
            <div>
                <form onSubmit={submitForm} >
                    <fieldset>
                        <label> Prisijungimo vardas</label><input placeholder="El. pašto adresas" id="Username" name="Username" onChange={handleUChange} /><br />
                        <label> Vardas</label> <input type="text" id="Firstname" name="Firstname" onChange={handleFChange} /><br />
                        <label> Pavardė</label> <input type="text" name="Lastname" onChange={handleLChange} /><br />
                        <label> Slaptažodis</label> <input type="password" name="Password" onChange={handlePChange} /><br />
                        <input type="submit" value="Registruotis" />
                    </fieldset>
                </form >
            </div >
            {Status && <p className='notification'>{Status}</p>}
        </div >
    )
}
export default RegisterPage;