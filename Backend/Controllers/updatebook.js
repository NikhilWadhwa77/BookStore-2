const Book = require('../Model/bookModel')

exports.updateBook = async (req, res) => {

    var { oldCode, name, code, author, publisher, price, website } = req.body

    const bookExists = await Book.findOne({ code: oldCode })

    if (!bookExists) {
        res.status(404).send({ err: "Book Not found" })
    } else {
        console.log(bookExists)
        if (!name) {
            name = bookExists.name
        }
        if (!code) {
            code = bookExists.code
        }
        if (!author) {
            author = bookExists.author
        }
        if (!publisher) {
            publisher = bookExists.publisher
        }
        if (!price) {
            price = bookExists.price
        }
        if (!website) {
            website = bookExists.website
        }

        // const updated = {
        //     name: name,
        //     code: code,
        //     author: author,
        //     publisher: publisher,
        //     price: price,
        //     website: website
        // }

        const result = await Book.updateOne({ code: oldCode }, { name, code, author, publisher, price, website })

        if (result) {
            res.status(200).send({ msg: "Updated Succesfully" })
        } else {
            console.log(err)
            res.status(500).send({ msg: 'Failed to UPDATE' })
        }

    }

}