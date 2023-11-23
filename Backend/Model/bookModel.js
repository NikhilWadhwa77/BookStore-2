const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: { type: String },
    code: { type: String },
    author: { type: String },
    publisher: { type: String },
    price: { type: String },
    website: { type: String }
})

const book = new mongoose.model("books", bookSchema)

module.exports = book;