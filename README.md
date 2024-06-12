# TCIT

## Requerimientos
- Node (Se ultilizó la versión 20.14.0).
- PostgreSQL https://www.postgresql.org/download/

## Ejecución
## Backend
- Tener un usuario en PostgreSQL, ya sea el usuario default postgres o uno propio.
- Crear una Base de Datos con nombre tcit.
- - Para crear la base de datos, desde una terminal ejecutar los siguientes comandos:
```psql -d postgres -U USUARIO```, remplazando con tu usuario de postgreSQL.
- - Ingresar contraseña del usuario.
```CREATE DATABASE tcit;```.
- - usar el comando ```\q``` para salir.

- En la carpeta /backend crear un archivo con llamado ```.env``` en el cual se debe ingresar el contenido que se encuentra en el archivo ```.env-ejemplo``` en el mismo directorio.
- En el archivo ```.env``` remplazar ```postgres``` con tu usuario de postgres, en caso de no usar el usuario postgres para PostgreSQL. Remplazar ```pass``` con la contraseña de la cuenta con la estas conectado a la Base de Datos de postgreSQL.

- Mediante una terminal, navegar a la carpeta /backend.
- Instalar dependencias con el comando ```npm i``` o ```npm install```.
- Iniciar servidor con el comando ```node index.js```.
- El servidor deberia estar funcionando escuchando en el puerto 3001.

## Frontend
- Mediante una terminal, navegar a la carpeta /frontend.
- Instalar dependencias con el comando ```npm i``` o ```npm install```.
- Iniciar la aplicación con el comando ```npm start```.
- En caso de no iniciarse una ventana en el navegador, ingresar a http://localhost:3000/.
