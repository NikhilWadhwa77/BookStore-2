const Book = require('../Model/bookModel')

exports.deleteBook = async (req, res) => {

    const { deleteItem: code } = req.body

    const bookExists = await Book.findOne({ code: code })

    if (!bookExists) {
        res.status(500).send({ msg: 'Failed to DELETE' })
    } else {
        Book.deleteOne({ code: code }).then(() => {
            res.status(200).send({ msg: "Deleted Succesfully" })
        }).catch((err) => {
            console.log(err)
            res.status(500).send({ msg: 'Failed to DELETE' })
        })
    }
} 