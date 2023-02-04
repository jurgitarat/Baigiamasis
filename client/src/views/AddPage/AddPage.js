import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/global';
import "./AddPage.css";
export const AddPage = (user) => {
    const [Firstname, setFirstName] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");

    const [Status, setStatus] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.token) {
            navigate("/login");
        }
    }
    );
    const sendToServer = (e) => {
        e.preventDefault();
        fetch(BASE_URL + 'events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify({
                'Firstname': Firstname,
                'Lastname': Lastname,
                'Email': Email,
                'Phone': Phone
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.err) {
                    setStatus(data.err);
                }
                else {
                    setStatus(data.msg);
                }
            })
            .catch()

            ;
    }
    const handleFirstnameChange = (e) => setFirstName(e.target.value);
    const handleLastnameChange = (e) => setLastname(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);

    return (
        <div>
            <h1>Naujo dalyvio registracija</h1>
            <form onSubmit={sendToServer}>
                <fieldset>
                    <label>Vardas</label><input type="text" onChange={handleFirstnameChange} /><br />
                    <label>Pavardė</label><input type="text" onChange={handleLastnameChange} /><br />
                    <label>El. Paštas</label><input type="text" onChange={handleEmailChange} /><br />
                    <label>Tel. Nr</label><input type="text" onChange={handlePhoneChange} /><br />
                    <button>Send to Server</button>
                </fieldset>
            </form>
            {Status && <p className='notification'>{Status}</p>}
        </div>
    )
}
export default AddPage;