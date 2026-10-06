const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// EJS is a template engine
// EJS stands for Embedded JavaScript.

app.get('/', (req, res) => {
    // res.sendFile("templates/index.html",{root:__dirname})
    let siteName = "Flipkart"
    let searchText = "Search Now"
    let arr = ["Buy", 54, 65]
    res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})