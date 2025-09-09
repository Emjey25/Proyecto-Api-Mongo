# Proyecto API REST con MongoDB

Este proyecto es una API REST construida con Node.js, Express y MongoDB. Permite gestionar usuarios y publicaciones a través de endpoints organizados bajo la ruta `/api`.

## Estructura del Proyecto

- `src/app.js`: Archivo principal de la aplicación.
- `src/routes/`: Contiene las rutas de la API.
- `src/controllers/`: Lógica de controladores para usuarios y publicaciones.
- `src/models/`: Modelos de datos de Mongoose.
- `src/db/`: Configuración de la base de datos.
- `src/config/`: Configuración de variables de entorno.
- `public/`: Archivos estáticos.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en el archivo correspondiente dentro de `src/config/envs.js`.
4. Inicia la base de datos MongoDB.
5. Ejecuta la aplicación:
   ```bash
   npm start
   ```

## Problema conocido

> **¡Atención!**
>
> Al ejecutar el archivo `app.js` desde el archivo `index.js`, se presenta un problema que impide el correcto funcionamiento de la aplicación. Por favor, revisa la integración y asegúrate de que la función de inicialización y la conexión a la base de datos se realicen correctamente.

## Endpoints principales

- `GET /api/users` — Listar usuarios
- `POST /api/users` — Crear usuario
- `GET /api/posts` — Listar publicaciones
- `POST /api/posts` — Crear publicación

## Notas

- Asegúrate de tener MongoDB corriendo localmente o de configurar la conexión a una base de datos remota.
- Si encuentras algún error, revisa la consola para más detalles y verifica la configuración de las variables de entorno.

---

Cualquier duda o sugerencia, comunícate con el equipo de desarrollo.
