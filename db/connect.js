const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true })
}

module.exports = connectDB