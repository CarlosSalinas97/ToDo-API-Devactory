var express = require('express')
const router = express.Router()

//Importar el modelo ToDo.js
var ToDo = require('../models/ToDo')

//Crear tarea
router.post('/add', async function(req, res){
    const body = req.body
    try{
        const addDB = await ToDo.create(body)
        res.status(201).json(addDB)
    } catch (err) {
        return res.status(500).json(err)
    }
})

//Listar tareas
router.get('/todo', async function(req, res){
    try{
        const todo = await ToDo.find()
        res.status(200).json(todo)
    } catch (err){
        return res.status(400).json(err)
    }
})

//Editar tarea
router.put('/editar/:id', async function(req, res){
    const _id = req.params.id
    const body = req.body
    try{
        const editDB = await ToDo.findByIdAndUpdate(_id,body,{new: true})
        res.status(201).json(editDB)
    } catch (err){
        return res.status(400).json(err)
    }
})

//Borrar tarea
router.delete('/borrar/:id', async function(req, res){
    const _id = req.params.id
    try{
        const deleteDB = await ToDo.findByIdAndDelete({_id})
        if(!deleteDB){
            return res.status(400).json()
        }
        res.json()
    } catch(err){
        return res.status(400).json(err)
    }
})
module.exports = router