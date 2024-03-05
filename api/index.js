const express = require("express")
const taskRouter = require("./routes/task.routes")
const port = 8080

const app = express()

app.use("/api/tasks", taskRouter)

app.listen(port, ()=>{
    console.log("Listening to port ", port)
})