const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog') 
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

//Middleware - modifys the request.............A function that will run before every request........it has request and response object....it can also set response.....can authenticate by checking the request header....and the order is very important 

// Different types of middleware :-
// Application level middleware
// Router level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware


// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "I am harry bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am Rohan bhai";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})