// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });






// const { createServer } = require('node:http');

// const fs = require("fs")    // common js

// import http from "http"    // EcmaScript ES6

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> Hello World </h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });








// // named import
// import {a,b,d} from "./mymodule.js"
// console.log(a,b,d)


// // default import
// import harry from "./mymodule.js"
// console.log(harry)




// const a = require("./mymodule2.js")

// console.log(a,__dirname,__filename);

// (function(exports, require, module, ___filename, __dirname) {
// //     module codes actually lives here
// });











// const fs = require("fs")
// const fs = require("fs/promises")
// console.log(fs)

// console.log("starting...")
//fs.writeFileSync("harry.txt","harry is a goood boy")
// fs.writeFile("harry2.txt","harry is a good boy2",()=>{
//     console.log("done")
//     fs.readFile("harry2.txt",(error,data)=>{
//         console.log(error,data.toString())
//     })

// fs.appendFile("harry.txt"," \t harryrobo",(e,d)=>{
//     console.log(d)
// })
// })
// console.log("ending...")
 












// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static('public'))   // public folder will give access to the backend files.


// app.get or app.post or app.put or app.delete(path,handler)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/about', (req, res) => {
//   res.send('about us')
// })
// app.get('/contact', (req, res) => {
//   res.send('contact me')
// })
// app.get('/blog', (req, res) => {
//   res.send('Hello blog!')
// })
//logic to fetch intro to js from the db
// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello intro-to-js!')
// })
// app.get('/blog/intro-to-py', (req, res) => {
//   res.send('Hello intro-to-py!')
// })
// app.get('/blog/:slug', (req, res) => {
    //logic to fetch {slug} from the db
//     console.log(req)
    //for url = http://localhost:3000/blog/intro-to-anu/rashi?mode=dark&region=in
//     console.log(req.params) // will output{ slug: 'intro-to-anu', second: 'rashi' }
//     console.log(req.query)
    // will output{ mode: 'dark', region: 'in' }
//   res.send(`hello ${req.params.slug}`)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })










// const express = require('express')

// const blog = require('./Routes/blog')
// const shop = require('./Routes/shop')

// ...


// const app = express()
// const port = 3000
 
// const fs = require("fs")

// app.use('/blog', blog)
// app.use('/shop', shop)

// app.use(express.static("public"))

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// MiddleWare 1 :- LOGGER for our application
// app.use((req, res, next) => {
  // res.send("Hacked by middleware 1")  dont do this
// console.log(req.headers ) 
// req.harry = "I am harry bhai";
// fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}`)
//   console.log(`${Date.now()} is a ${req.method}`)
//   next()
// })
// MiddleWare 2
// app.use((req, res, next) => {
//   console.log('m2')
//   req.harry = "I am rohan bhai"
//   next()
// })

// app.get('/', (req, res) => {
//   console.log('its a get request')
//   res.send('Hello World $!' + req.harry )
// })
// .post('/', (req, res) => {
//     console.log("its a post request")
//   res.send('Hello World Post !')
// }).put('/', (req, res) => {
//     console.log("its a put request")
//   res.send('Hello World Put !')
// }).delete('/', (req, res) => {
//     console.log("its a delete request")
//   res.send('Hello World delete !')
// })

// app.get("/index",(req, res) => {
//   console.log("its index")
//   res.sendFile('templates/index.html',{root:__dirname})
// })

// app.get("/api",(req, res) => {
//   console.log("its index")
//   res.json({a:1,b:2,c:3,d:4})
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
