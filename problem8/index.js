// POST Request: Create a route /submit that accepts a POST request and logs the request body.
// Hint: Use app.post() and req.body.


const express = require("express")
const app = express()
app.use(express.json())

app.post("/submit" , (req, res)=>{
    res.json(req.body)
})

app.listen(3000 , ()=>{
    console.log("server is running")
})