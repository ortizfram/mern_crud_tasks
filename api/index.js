const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose");
const taskRouter = require("./routes/task.routes")

const port = 8080

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use("/api/tasks", taskRouter)

app.listen(port, ()=>{
    mongoose
  .connect("mongodb+srv://ortizfram:KKyBqqMA0hsbffhB@cluster0.zb6udsr.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
    console.log("Listening to port ", port)
})