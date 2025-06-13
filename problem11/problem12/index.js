const express = require("express");
const connectDB = require("./db");
const app = express();
app.use(express.json())
const userRouter = require("./controller/userController")

app.use("/users", userRouter)

app.get("/", (req, res) => {
  res.send("connected");
});


app.listen(3000, async () => {
  await connectDB();
  console.log("server is running");
});
