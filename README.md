# To Do App
## Ejercicio de evaluación propuesto por Devactory

---

# Introducción 📋
## Ejercicio

_El ejercicio consiste en desarrollar una aplicación simple de gestión de tareas o quehaceres pendientes (to-dos) donde el usuario pueda crear tareas, marcarlas como terminadas y también borrarlas._

## Descripción de la aplicación

_El usuario podrá crear una lista de tareas, marcarlas como finalizadas, borrarlas y filtrarlas por estado de las tareas (Todas, Pendientes, Completadas). La página cuenta con una guía de uso para aquellos nuevos usuarios._
_Las tareas tienen persistencia dentro de una base de datos en la nube para asegurar al usuario la disponibilidad de ellas en todo momento, desde cualquier dispositivo._
_La página posee diseño responsivo, por lo que se puede acceder a ella mediante cualquier dispositivo con acceso a Internet._

---

# Demo 🚀
## App
```
  https://todo-front-devactory.herokuapp.com/
```

## API
```
  https://todo-api-devactory.herokuapp.com/api/todo
```

## Endpoints
### [GET] /api/todo
_Trae al usuario, la lista de todas las tareas._
```
  https://todo-api-devactory.herokuapp.com/api/todo
```

### [POST] /api/add
_Crea una nueva tarea, recibe el campo 'texto'(string) del body._
```
  https://todo-api-devactory.herokuapp.com/api/add
```

### [PUT] /api/editar/:id
_Permite modificar los campos 'texto'(string) y 'activo'(boolean) desde el body, pasando como parametro el 'id' correspondiente a la tarea._
```
  https://todo-api-devactory.herokuapp.com/api/editar/:id
```

### [DELETE] /api/borrar/:id
_Elimina la tarea asociada al 'id' pasado como parametro_
```
  https://todo-api-devactory.herokuapp.com/api/borrar/:id
```

---

# Desarrollo ⚙️

_Las herramientas utilizadas para realizar el proyecto fueron:_
  * Frontend:
    * [Vue.js](https://vuejs.org/v2/guide/) - Framework JavaScript
    * [Vuex](https://vuex.vuejs.org/) - Librería para Vue
    * [Vue Router](https://router.vuejs.org/) - Librería para Vue
    * [Bootstrap](https://getbootstrap.com/) - CSS Framework
    * [Axios](https://github.com/axios/axios) - Cliente HTTP
    
    
  * Backend:
    * [Node.js](https://nodejs.org/es/) - Framework JavaScript
    * [Express](https://expressjs.com/es/) - Librería para Node.js
    * [Mongo Atlas](https://www.mongodb.com/cloud/atlas) - Base de datos
    * [Mongoose](https://mongoosejs.com/) - ODM
    


  * Deploy:
    * [Heroku](https://www.heroku.com/) - Plataforma de Deploy en la nube
---

# Instalacion 🔧
_La API esta construida sobre [Node.js](https://nodejs.org/es/) v14.8.0, por lo que será necesario tenerlo instalado_

## Prerequisitos:
_Instalar todos los paquetes necesarios mediante el comando:_
```
  npm install
```

## Ejecución
_Para compilar y ejecutar, se deberá abrir la terminal en la dirección del proyecto y ejecutar el comando:_
```
  nodemon run
```

_La pagina se ejecutara en: http://127.0.0.1:3000/_

---
    
# Autor ✒️
* **Salinas, Carlos** 
[Linkedin](https://www.linkedin.com/in/carlos-ariel-salinas/)
