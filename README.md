# Movies API 🎬

Este proyecto es una API REST construida con Node.js y Express para la gestión de un catálogo de películas y sus entidades relacionadas (Directores, Géneros, Productoras y Tipos).

## 🚀 Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework web para Node.js.
- **MySQL2**: Cliente de MySQL para Node.js con soporte de promesas.
- **Zod**: Librería de declaración y validación de esquemas.
- **CORS**: Middleware para permitir peticiones de recursos cruzados.

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
- [MySQL](https://www.mysql.com/) o un entorno como XAMPP/WAMP.

## 📦 Instalación

1. Clona el repositorio o descarga los archivos.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:
   ```bash
   npm install
   ```

## ⚙️ Configuración

Crea o edita el archivo `.env` en la raíz del proyecto y configura tus credenciales de base de datos:

```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_DATABASE=movies_db
DB_PORT=3306
```

> [!IMPORTANT]
> Asegúrate de crear la base de datos `movies_db` en tu servidor MySQL antes de iniciar la aplicación.

## 🏃 Ejecución

Para iniciar el servidor en modo desarrollo (con recarga automática):

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:4000`.

## 📂 Estructura del Proyecto

- `database/`: Configuración y conexión a MySQL.
- `middleware/`: Middlewares personalizados.
- `modules/`: Lógica central de la aplicación.
  - `director/`, `gender/`, `media/`, `producer/`, `type/`: Módulos de la API con sus respectivas rutas y lógica.
- `index.js`: Punto de entrada de la aplicación.
- `server.js`: Configuración de la clase Server (Express).

## 📡 Endpoints de la API

### Módulo de Media (`/api/media`)
- `GET /api/media`: Listar todas las películas y series.
- `POST /api/media`: Crear una nueva película o serie.
- `PATCH /api/media/:id`: Actualizar una película o serie existente.
- `DELETE /api/media/:id`: Eliminar una película o serie.

### Módulo de Director (`/api/director`)
- `POST /api/director`: Crear un nuevo director.
- `PATCH /api/director/:id`: Actualizar un director existente.

### Módulo de Género (`/api/gender`)
- `POST /api/gender`: Crear un nuevo género.
- `PATCH /api/gender/:id`: Actualizar un género existente.

### Módulo de Productora (`/api/producer`)
- `POST /api/producer`: Crear una nueva productora.
- `PATCH /api/producer/:id`: Actualizar una productora existente.

### Módulo de Tipo (`/api/type`)
- `POST /api/type`: Crear un nuevo tipo de contenido (Película/Serie).
- `PATCH /api/type/:id`: Actualizar un tipo de contenido existente.


---
*Proyecto desarrollado para la asignatura Proyecto Integrado II.*
