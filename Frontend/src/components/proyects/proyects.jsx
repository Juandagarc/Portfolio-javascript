import { useEffect, useState } from 'react';
import axios from 'axios';
import { BounceLoader } from 'react-spinners'; // Importa un componente de carga

import './proyects.css';

function Proyects() {
  const [notionData, setNotionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://apiforproyects.azurewebsites.net/notion-data')
      .then(response => {
        setNotionData(response.data);
        setLoading(false); // Marca la carga como completa
      })
      .catch(error => {
        console.error(error);
        setError('Hubo un error al cargar los datos.');
        setLoading(false); // Marca la carga como completa incluso si hay un error
      });
  }, []);

  return (
    <div className='proyects-container'>
      {loading ? (
        // Muestra el indicador de carga mientras se obtienen los datos
        <div className='loading-container'>
          <BounceLoader color={'green'} loading={loading} size={150} />
        </div>
      ) : error ? (
        // Muestra un mensaje de error si la solicitud falla
        <div className='error-message'>{error}</div>
      ) : (
        // Muestra los datos si la carga fue exitosa
        <div className='proyects-wrapper'>
          {/* Mapea sobre los datos de Notion y muestra la información como tarjetas */}
          {notionData.map(item => (
            <div className='proyect-card' key={item.imagen}>
              <h2>{item.nombre}</h2>
              <img className='macs' src={item.imagen} alt={item.nombre} />
              <p>{item.descripcion}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Enlace
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Proyects;
