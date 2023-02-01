const express = require('express')
const app = express()
const taskRouter = require('./routes/tasks')
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
dotenv.config({path: './.env'})

app.use(express.json())
app.use(express.static('./public/'))
app.use('/api/v1/tasks', taskRouter)

app.get('*', (req, res) => {
    console.log("Bad Request")
    res.status(404).send("404 - Not Found " + req.url)
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("Database connected successfully")
        app.listen(process.env.SERVER_PORT, () => console.log("Server listening on port:", process.env.SERVER_PORT))
    } catch (error) {
       console.log(error) 
    }
}

start()

