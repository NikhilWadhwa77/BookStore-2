const Book = require('../Model/bookModel')

exports.getBooksFromDb = async (req, res) => {
    const all = await Book.find();
    res.send(all)
}