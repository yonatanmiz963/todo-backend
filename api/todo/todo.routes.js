const express = require('express')
const { updateTodo, addTodo, getTodos, deleteTodo } = require('./todo.controller')
const router = express.Router()


router.get('/', getTodos)
router.post('/', addTodo)
router.put('/edit/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router