import React, { useState } from 'react';
import './Foto.css';
import axios from 'axios';

function Foto() {
  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState('');

  function handleImageChange(e) {
    // Sla het gekozen bestand op
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile);
    // Sla het gekozen bestand op in de state
    setFile(uploadedFile);
    // Sla de preview URL op zodat we deze kunnen laten zien in een <img>
    setPreviewUrl(URL.createObjectURL(uploadedFile));
  }

  async function sendImage(e) {
    // Voorkom een refresh op submit
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await axios.post('http://localhost:8080/users/1001/photo', formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        })
      console.log(result.data);
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="page-container">
      <h1>Afbeelding uploaden en preview bekijken</h1>
      <form onSubmit={sendImage}>
        <label htmlFor="student-image">
          Choose File:
          <input type="file" name="image-field" id="user-image" onChange={handleImageChange}/>
        </label>
        {/*Als er een preview url is, dan willen we deze in een afbeelding tonen*/}
        {previewUrl &&
          <label>
            Preview:
            <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is" className="image-preview"/>
          </label>
        }
        <button type="submit">Uploaden</button>
      </form>
    </div>
  );
}

export default Foto;