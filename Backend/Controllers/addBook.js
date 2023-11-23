const Book = require('../Model/bookModel')

exports.addNewBook = async (req, res) => {

    const bookData = req.body;

    const alreadyExists = await Book.findOne({ code: bookData.code })

    if (!bookData.name || !bookData.code || !bookData.price) {
        res.status(400).send({ err: "Name and Code must be provides" })
    } else {
        if (alreadyExists) {
            res.status(400).send({ err: "Book Already Exists" })
        } else {
            const bookCreated = await Book.create(bookData)

            if (bookCreated) {
                console.log(req.body)
                res.status(200).send({ msg: "Book Added successfully" })
            } else {
                res.status(500).send({ err: "Book Failed" })
            }
        }
    }





}