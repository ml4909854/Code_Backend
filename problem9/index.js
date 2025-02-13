// Error Handling: Create a middleware to handle 404 errors (route not found).

// Hint: Use app.use() at the end of your routes.


const express = require("express")
const app = express()

app.get("/" , (req, res)=>{
    res.send("welcome to the home page!")
})

app.use((req , res , next)=>{
    res.send("404 - Page Not Found")
})

app.listen(3000 , ()=>{
    console.log("server is running")
})