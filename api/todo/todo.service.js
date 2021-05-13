const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query() {
    try {
        const collection = await dbService.getCollection('todo')
        const todos = await collection.find({}).toArray()
        return todos
    } catch (err) {
        console.log('cannot find todos', err)
        throw err
    }
}

async function remove(todoId) {
    try {
        const collection = await dbService.getCollection('todo')
        const query = { _id: ObjectId(todoId) }
        await collection.deleteOne(query)
        return todoId
    } catch (err) {
        console.log(`cannot remove Todo${todoId}`, err)
        throw err
    }
}

async function add(todo) {
    try {
        const todoToAdd = { ...todo, createdAt: Date.now(), isDone: false }
        const collection = await dbService.getCollection('todo')
        await collection.insertOne(todoToAdd)
        return todoToAdd;
    } catch (err) {
        console.log('cannot insert todo', err)
        throw err
    }
}


async function update(todo) {
    try {
        const todoToSave = { ...todo, _id: ObjectId(todo._id) }
        const collection = await dbService.getCollection('todo')
        await collection.updateOne({ '_id': todoToSave._id }, { $set: todoToSave })
        return todoToSave;
    } catch (err) {
        console.log(`cannot update todo ${todo._id}`, err)
        throw err
    }
}

module.exports = {
    query,
    remove,
    add,
    update
}


