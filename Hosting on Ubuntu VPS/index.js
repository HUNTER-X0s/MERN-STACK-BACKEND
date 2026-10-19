const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

// PM2 is a package that works as a process manager for node.js applications

// By using React, we can break our code into modular components. 
// React was developed by Facebook. 

// A variable that can be changed. It's called `State` in react. 
// In components, we can pass the data, which is called props. 