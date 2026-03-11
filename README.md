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

- `database/`: Conexión y configuración de la base de datos MySQL.
- `middleware/`: Middlewares como el validador de esquemas.
- `modules/`: Módulos de la API divididos por entidad.
  - `director/`, `genre/`, `media/`, `producer/`, `type/`: Cada uno con sus modelos, controladores, rutas y esquemas de validación.
- `index.js`: Punto de entrada que inicializa el servidor.
- `server.js`: Configuración principal de la clase Server (Express).

## 📡 Endpoints de la API

Todos los endpoints básicos de consulta devuelven un estado `200 OK`. Los de creación devuelven `201 Created`.

### 🎬 Películas / Media (`/api/media`)
- `GET /api/media`: Listar todas las películas.
- `GET /api/media/:id`: Obtener una película por ID.
- `POST /api/media`: Crear nueva película.
- `PATCH /api/media/:id`: Actualizar datos de una película.
- `DELETE /api/media/:id`: Eliminar una película.

### 👤 Directores (`/api/director`)
- `GET /api/director`: Listar todos los directores.
- `GET /api/director/:id`: Obtener director por ID.
- `POST /api/director`: Crear nuevo director.
- `PATCH /api/director/:id`: Actualizar director por ID.

### 🎭 Géneros (`/api/genre`)
- `GET /api/genre`: Listar todos los géneros.
- `GET /api/genre/:id`: Obtener género por ID.
- `POST /api/genre`: Crear nuevo género.
- `PATCH /api/genre/:id`: Actualizar género por ID.

### 🏢 Productoras (`/api/producer`)
- `GET /api/producer`: Listar todas las productoras.
- `GET /api/producer/:id`: Obtener productora por ID.
- `POST /api/producer`: Crear nueva productora.
- `PATCH /api/producer/:id`: Actualizar productora por ID.

### 🏷️ Tipos de Contenido (`/api/type`)
- `GET /api/type`: Listar todos los tipos.
- `GET /api/type/:id`: Obtener tipo por ID.
- `POST /api/type`: Crear nuevo tipo.
- `PATCH /api/type/:id`: Actualizar tipo por ID.

## 🛡️ Validación de Datos
El proyecto utiliza **Zod** para la validación de esquemas en tiempo real. Cada petición `POST` y `PATCH` pasa por un middleware de validación (`validateSchema`) que asegura la integridad de los datos antes de llegar al controlador.

## 📝 Documentación JSDoc
Todo el código está documentado mediante **JSDoc**, lo que proporciona soporte completo de IntelliSense y facilita el mantenimiento a largo plazo mediante la descripción detallada de funciones, parámetros y retornos.

---
*Proyecto desarrollado para la asignatura Proyecto Integrado II.*
