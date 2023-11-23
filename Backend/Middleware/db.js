const mongoose = require('mongoose')
const config = require('config')


const url = config.get('DB_STRING')

exports.connectToDB = () => {
    mongoose.connect(url).then(() => {
        console.log("Connected to MongoDB");
    }).catch(() => {
        console.log("Couldn't connect to MongoDB");
    })
}