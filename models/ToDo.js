var  mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDoSchema = new Schema({
    texto:{type: String, required: true},
    fecha:{type: Date, default: Date.now},
    activo:{type: Boolean, default: true}
})

module.exports = mongoose.model('ToDo',ToDoSchema)