const express = require('express')
const app = express();
const router = express.Router()
const addBook = require('../Controllers/addBook')
const deletebook = require('../Controllers/deletebook')
const updatebook = require('../Controllers/updatebook')
const getbooks = require('../Controllers/getbooks')


app.use('/addbook', addBook.addNewBook)
app.use('/deletebook', deletebook.deleteBook)
app.use('/updatebook', updatebook.updateBook)
app.use('/getbooks', getbooks.getBooksFromDb)

router.use("", app)
module.exports = router