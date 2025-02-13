
// Basic Middleware: Create a middleware that logs the request method and URL for every request.

// Hint: Use app.use() and console.log().
const express = require("express")
const app = express()


app.use(()=>{
    console.log("Hello I am middleware")
})

app.get("/" , ()=>{
    console.log("checkmiddleware")
})
app.listen(4000 , ()=>{
    console.log("server is running")
})