1. 🧠 Lista de Tareas - Backend

2. Backend del proyecto Lista de Tareas, desarrollado en Node.js + Express + MongoDB, y desplegado en Vercel.
   Este servidor expone una API RESTful que permite crear, listar, editar y eliminar tareas almacenadas en MongoDB Atlas, 
   y se comunica con el frontend desplegado en Netlify.

3. 🚀 Tecnologías principales
   - Node.js – entorno de ejecución JavaScript.
   - Express.js – framework minimalista para construir APIs REST.
   - MongoDB Atlas – base de datos NoSQL en la nube.
   - Mongoose – ODM para modelar y gestionar los datos.
   - CORS – para permitir solicitudes entre frontend y backend.
   - Vercel – plataforma de despliegue del backend.

4. 📁 Estructura del proyecto
   src/
   ├── controllers/
   │   └── tarea.controllers.js    # Lógica de negocio
   ├── models/
   │   └── tarea.js                # Modelo Mongoose
   ├── routes/
   │   ├── index.routes.js         # Rutas principales
   │   └── tareas.routes.js        # Rutas CRUD de tareas
   ├── dbconfig.js                 # Conexión a MongoDB
   index.js                        # Punto de entrada principal
   vercel.json                     # Configuración de despliegue

5. ⚙️ Instalación y uso local
   1. Clonar el repositorio:
      git clone https://github.com/duncann555/12-backend-lista-tareas-27-10-
      cd 12-backend-lista-tareas-27-10-

   2. Instalar dependencias:
      npm install

   3. Crear un archivo .env con tus variables de entorno:
      MONGODB=mongodb+srv://sebaflomen_db_user:seba123456789@cluster0.zu20dqb.mongodb.net/listatareas
      PORT=3000

   4. Ejecutar el servidor en modo desarrollo:
      npm run dev

   5. Abrir en el navegador o Postman:
      http://localhost:3000/api/tareas

6. 🌐 Despliegue
   Backend online: https://12-backend-lista-tareas-27-10.vercel.app
   Frontend (Netlify): https://zesty-rolypoly-92f5db.netlify.app

7. 🧩 Endpoints disponibles
   - GET /api/tareas → Obtiene todas las tareas
   - POST /api/tareas → Crea una nueva tarea
   - GET /api/tareas/:id → Obtiene una tarea específica
   - PUT /api/tareas/:id → Edita una tarea existente
   - DELETE /api/tareas/:id → Elimina una tarea

8. 🧰 Ejemplo de petición (POST)
   URL: https://12-backend-lista-tareas-27-10.vercel.app/api/tareas

   Body (JSON):
   {
     "tareas": "Programar hasta que funcione la página"
   }

   Respuesta:
   {
     "mensaje": "Tarea creada correctamente",
     "tarea": {
       "_id": "6541a9f8c51f2300b99c0abc",
       "tareas": "Programar hasta que funcione la página",
       "createdAt": "2025-11-12T07:12:45.229Z"
     }
   }

9. 🧠 Autor
    Sebastián Flomenbaum  
    Estudiante de Ciberseguridad y Desarrollo Web Full Stack  
    GitHub: https://github.com/duncann555

10. ⭐ Recomendaciones
    - Si se modifica la estructura del backend, actualizar también las rutas en el frontend.
    - No compartir la URI completa de MongoDB (mantenerla en .env).
