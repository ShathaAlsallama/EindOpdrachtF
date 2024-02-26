import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Client.css';

function Client() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:8080/users');
        // Plaats alle users in de state zodat we het op de pagina kunnen gebruiken
        setUsers(response.data);
        console.log(response.data);
      } catch(e) {
          console.error(e);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="page-container">
      <h1>Alle users bij NLBank</h1>
      <table>
        <thead>
        <tr>
          <th>Usernummer</th>
          <th>Foto</th>
          <th>Naam</th>
          <th>Product</th>
          <th>Emailadres</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user) => {
          // De key moet op het buitenste element staan en uniek zijn
          return <tr key={user.userNumber}>
            <td>{user.userNumber}</td>
            {/*Even checken of er uberhaupt een file is, en zo ja, dan laten we hem zien!*/}
            <td>{user.file && <img src={user.file.url} alt={user.name}/>}</td>
            <td>{user.name}</td>
            <td>{user.course}</td>
            <td>{user.emailAddress}</td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Client;