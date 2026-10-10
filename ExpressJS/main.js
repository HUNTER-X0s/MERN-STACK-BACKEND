const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // It is used for using middleware and express.static is a built in middleware that says make the (here public) folder public

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})



// REQUEST PARAMETERS AND QUERIES
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-js?mode=dark&region=in
    console.log(req)
    console.log(req.params) // will output { slug: 'intro-to-js' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second', (req, res) => {
    // logic to fetch {slug} from the db
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
})


app.get('/blog/intro-to-js', (req, res) => {
    // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })


app.get('/blog/intro-to-python', (req, res) => {
    // logic to fetch intro to python from the db
    res.send('Hello intro-to-python!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// ExpressJs is a web framework which is build for for building websites



// The http module or package capabilities are limited

// It cannot serve static files
// You have to implement the security from the starting
// after building the server managing the things wiull become messy 
//writing custom code for GET and POST Request
