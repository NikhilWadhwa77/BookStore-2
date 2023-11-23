const express = require('express')
const app = express()
const router = require('./Routes/userRoutes')
const DB = require("./Middleware/db")

app.use(express.json())

DB.connectToDB()

app.use(router)

app.listen(5000, () => {
    console.log("Server Started at Port 5000")
})