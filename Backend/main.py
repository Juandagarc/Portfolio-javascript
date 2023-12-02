from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# Configurar CORS para permitir todas las solicitudes desde cualquier origen
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Reemplaza con tu token de integración de Notion
NOTION_TOKEN = 'secret_vyOIXSQQDcpEAStRJ5hRoEkLbcqkA7EgwkkElzhcGbK'
NOTION_DATABASE_ID = 'aca6892407d64b3e810ce12a65a5be33'

NOTION_API_URL = f'https://api.notion.com/v1/databases/{NOTION_DATABASE_ID}/query'

@app.get("/notion-data")
async def get_notion_data():
    try:
        # Configura la conexión con la API de Notion
        headers = {
            'Authorization': f'Bearer {NOTION_TOKEN}',
            'Content-Type': 'application/json',
            'Notion-Version': '2021-05-13',  # Replace with the latest Notion API version
        }

        # Obtiene los datos de la base de datos en Notion
        response = requests.post(NOTION_API_URL, headers=headers)
        response.raise_for_status()
        database_data = response.json()

        # Mapea los datos según la estructura de tu tabla en Notion
        data = database_data.get('results', [])

        # Actualiza el mapeo para obtener el nombre y el link correctamente
        mapped_data = [
            {
                'nombre': item.get('properties', {}).get('Nombre', {}).get('title', [{}])[0].get('text', {}).get('content', ''),
                'imagen': item.get('properties', {}).get('Imagen', {}).get('files', [{}])[0].get('name', ''),
                'descripcion': item.get('properties', {}).get('Descripcion', {}).get('rich_text', [{}])[0].get('text', {}).get('content', ''),
                'link': item.get('properties', {}).get('Link', {}).get('rich_text', [{}])[0].get('text', {}).get('content', ''),
            }
            for item in data
        ]

        # Devuelve los datos mapeados a tu aplicación de React
        return mapped_data

    except Exception as e:
        # Maneja otros errores
        raise HTTPException(status_code=500, detail=str(e))
