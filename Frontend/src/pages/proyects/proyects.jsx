import { useEffect, useState } from 'react';
import axios from 'axios';

function Proyects() {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    // Llamada a la nueva ruta de tu API FastAPI que obtiene datos de Notion
    axios.get('http://localhost:8000/notion-data')
      .then(response => {
        setNotionData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <p>¡Hola mundo!</p>
      {notionData && (
        <div>
          {/* Mapea sobre los datos de Notion y muestra la información */}
          {notionData.map(item => (
            <div key={item.imagen}>
              <h2>{item.nombre}</h2>
              <img src={item.imagen} alt={item.nombre} />
              <p>{item.descripcion}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Enlace
                </a>
              )}
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Proyects;
