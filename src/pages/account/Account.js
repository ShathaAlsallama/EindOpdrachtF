import React, { useState } from 'react';
import './Account.css';
import axios from 'axios';

function Account() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userProduct, setUserProduct] = useState('bank');
  const [addSucces, toggleAddSuccess] = useState(false);

  async function addUser(e) {
    // voorkom refresh
    e.preventDefault();
    console.log(userName, userEmail, userProduct);

    try {
        // Verstuur de data in een object en zorg dat de keys overeenkomen met die in de backend
        const response = await axios.post('http://localhost:8080/users', {
          name: userName,
          emailAddress: userEmail,
          course: userProduct,
        });

        console.log(response.data);
        toggleAddSuccess(true);
    } catch(e) {
        console.error(e);
    }
  }

  return (
    <div className="page-container">
      <h1>Een nieuwe user toevoegen</h1>
      {addSucces === true && <p>User is toegevoegd!</p>}
      <form onSubmit={addUser}>
        <label htmlFor="user-name">
          Naam en achternaam:
          <input
            type="text"
            name="user-name-field"
            id="user-name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <label htmlFor="user-email">
          Email:
          <input
            type="email"
            name="user-email-field"
            id="user-email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}/>
        </label>
        <label htmlFor="student-email">
          Producten:
          <select
            id="user-product"
            name="user-product-field"
            value={userProduct}
            onChange={(e) => setUserProduct(e.target.value)}
          >
            <option value="Betalen">
              Betalen
            </option>
            <option value="Hypotheek">
              Hypotheek
            </option>
            <option value="sparen">
              sparen
            </option>
            <option value="lenen">
              Geld lenen
            </option>
            <option value="Pensioen">
              Pensioen
            </option>
            <option value="Verzekeren">
              Verzekeren
            </option>
          </select>
        </label>
        <button type="submit">
          Voeg user toe
        </button>
      </form>
    </div>
  );
}

export default Account;