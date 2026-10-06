// https://www.npmjs.com/package/mongodb

// Mongoose is a Javascript Object oriented Programming library that creates a connection between Mongodb and the Node.js JavaScript runtime environment

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({  desc: "Description of this todo", isDone: false, days: 5 })
    todo.save() 
    res.send('Hello World!')
})

app.get('/a', async (req, res) => { 
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})