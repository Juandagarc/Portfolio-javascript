import { useEffect, useState } from 'react';
import axios from 'axios';

import './proyects.css';

function Proyects() {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/notion-data')
      .then(response => {
        setNotionData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='proyects-container'>
      {notionData && (
        <div className='proyects-wrapper'>
          {/* Mapea sobre los datos de Notion y muestra la información como tarjetas */}
          {notionData.map(item => (
            <div className='proyect-card' key={item.imagen}>
              <h2>{item.nombre}</h2>
              <img src={item.imagen} alt={item.nombre} />
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
