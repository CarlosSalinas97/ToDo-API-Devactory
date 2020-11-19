const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


//Variable de Rutas
var API = require('./controllers/ToDoController')


//Conexion a MongoDB Atlas
const uri = 'mongodb+srv://test:rypoE8v1ftod1pyt@cluster0.iy6cb.mongodb.net/test?retryWrites=true&w=majority';
const opciones = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};

mongoose.connect(uri, opciones).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);

const app = express();


//Rutas
app.get('/', function(req, res){
  res.send('Hola mundo')
})
app.use('/api', API)


//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


//Puerto
app.set('puerto', process.env.PORT || 3000)
app.listen(app.get('puerto'),function(){
  console.log('Prendido en el puerto '+app.get('puerto'));
});