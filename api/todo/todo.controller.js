const todoService = require('./todo.service')

async function getTodos(req, res) {
    try {
        const todos = await todoService.query(req.query)
        res.send(todos)
    } catch (err) {
        console.log('Cannot get todos', err)
        res.status(500).send({ err: 'Failed to get todos' })
    }
}

async function deleteTodo(req, res) {
    try {
        await todoService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        console.log('Failed to delete todo', err)
        res.status(500).send({ err: 'Failed to delete todo' })
    }
}


async function addTodo(req, res) {
    try {
        var todo = req.body
        const addedTodo = await todoService.add(todo)
        res.send(addedTodo)

    } catch (err) {
        console.log('Failed to add todo', err)
        res.status(500).send({ err: 'Failed to add todo' })
    }
}

async function updateTodo(req, res) {
    try {
        const todo = req.body
        const savedTodo = await todoService.update(todo)
        res.send(savedTodo)
    } catch (err) {
        console.log('Failed to update todo', err)
        res.status(500).send({ err: 'Failed to update todo' })
    }
}


module.exports = {
    getTodos,
    deleteTodo,
    addTodo,
    updateTodo,
}