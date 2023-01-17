const express = require('express')
// to allow requests from another origin
const cors = require("cors")


const app = express()
const port = 3000
// middlewares
app.use(cors())


let counter = 0;

// endpoint
app.get('/', (req, res) => {
  res.send(JSON.stringify({counter}))
})

app.post("/increment", (req, res) => {
    counter++;
    console.log(counter)
    res.send(JSON.stringify({ counter }))
})

app.post("/decrement", (req, res) => {
    counter--;
    console.log(counter)
    res.send(JSON.stringify({ counter }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})