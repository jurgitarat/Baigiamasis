import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./List.css";
import { BASE_URL } from '../../constants/global';

export const List = (user) => {
  const [results, setResults] = useState("");
  const [Status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.token) {
      navigate("/login");
    }
    console.log(results);
    setStatus("Sarašas kraunamas");
    fetch(BASE_URL + 'events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        else return res.json();
      })
      .then((data) => {
        handleRefresh(data);
      })
      .catch((error) => setStatus("Klaida: nepavyko užkrauti sąrašo"));
  }, []);
  const handleRefresh = (data) => {
    if (data.length === 0) {
      setResults("");
      setStatus("Dalyvių sąrašas tuščias")
    }
    else {
      setResults(data.map((result, i) => (
        <div className="card" key={result.idcli}>
          <h2>{result.Vardas} {result.Pavarde}</h2>
          <p>el pastas: <a href="mailto://{result.elPastas}">{result.elPastas}</a></p>
          <p>Telefonas: {result.telNr}</p>
          <button onClick={() => handleDelete(result.idcli)} class="delete">
            Trinti
          </button>
        </div>
      )));
      setStatus("");
    }
  }

  const handleDelete = (id) => {
    if (window.confirm('Ar tikrai norite ištrintį šį dalyvį?')) {
      fetch(BASE_URL + `events/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: 'Bearer ' + user.token
        }
      })
        .then((res) => {
          if (!res.ok) throw new Error();
          else return res.json();
        })
        .then((data) => {
          handleRefresh(data);
        })
        .catch((error) => setStatus("Klaida: nepavyko užkrauti sąrašo"));
    }
  }
  return (
    <div>
      <h1>Dalyvių sąrašas</h1>
      {results && <div className='wrapper'>{results}</div>}
      {Status && <p className='notification'>{Status}</p>}
    </div>
  )
}
export default List;