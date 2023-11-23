import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'

const BooksList = () => {

    const loadBooks = async () => {
        const res = await fetch('/getbooks', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        // console.log(res)
        const data = await res.json()
        // console.log(data)
        setList(data)
    }

    useEffect(() => {
        loadBooks();
    }, [])

    const [list, setList] = useState([])

    const createBookCard = obj => {
        return <BookCard
            key={obj.code}
            name={obj.name}
            code={obj.code}
            author={obj.author}
            publisher={obj.publisher}
            price={obj.price}
            website={obj.website}
        />
    }

    const [deleteItem, setDeleteItem] = useState("")

    const handleDeleteChange = (e) => {
        setDeleteItem(e.target.value)
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log(deleteItem)
        const res = await fetch('/deletebook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ deleteItem })
        })

        const data = res.json();

        if (res.status !== 200 || !data) {
            window.alert("FAILED to Delete")
            console.log("FAILED to Delete")
        } else {
            window.alert("SUCCESSFUL Deletion")
            console.log("SUCCESSFUL Deletion")
        }
        setDeleteItem("")
        loadBooks()

    }

    const [bookData, setBookData] = useState({ name: '', code: '', author: '', publisher: '', price: '', website: '' })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBookData({
            ...bookData,
            [name]: value
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const { name, code, author, publisher, price, website } = bookData;

        const res = await fetch("/addbook", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, code, author, publisher, price, website })
        })

        // console.log(res.status)
        const data = await res.json()
        // console.log(data)

        if (res.status !== 200 || !data) {
            window.alert("Enter Data Properly and Try again")
            console.log("FAILED to ADD")
        } else {
            window.alert("SUCCESSFULLY Added")
            console.log("SUCCESSFULLY Added")
        }

        setBookData({ name: '', code: '', author: '', publisher: '', price: '', website: '' })
        loadBooks()
    }

    // update
    const [updateData, setUpdateData] = useState({ oldCode: '', name: '', code: '', author: '', publisher: '', price: '', website: '' })

    const handleUpdateChange = (e) => {
        const { name, value } = e.target
        setUpdateData({
            ...updateData,
            [name]: value
        })
    }

    const updateHandler = async (event) => {
        event.preventDefault()
        const { oldCode, name, code, author, publisher, price, website } = updateData;

        const res = await fetch("/updatebook", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ oldCode, name, code, author, publisher, price, website })
        })

        // console.log(res.status)
        const data = await res.json()
        // console.log(data)

        if (res.status !== 200 || !data) {
            window.alert("FAILED to UPDATE")
            console.log("FAILED to UPDATE")
        } else {
            window.alert("SUCCESSFULLY UPDATED")
            console.log("SUCCESSFULLY UPDATED")
        }

        setUpdateData({ oldCode: '', name: '', code: '', author: '', publisher: '', price: '', website: '' })
        loadBooks()
    }

    return (
        <>
            <div className="books-container">
                <table>
                    <tr>
                        <th className="col h4">Name</th>
                        <th className="col h4">Code</th>
                        <th className="col h4">Author</th>
                        <th className="col h4">Publisher</th>
                        <th className="col h4">Price</th>
                        <th className="col h4">Website</th>
                    </tr>
                    {list.map(createBookCard)}
                </table>
            </div>

            <div className="container-fluid forms-container">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <div className='delete-book'>
                            <h3>Delete Book</h3>
                            <form >
                                <input type="text" placeholder='Enter Code to Delete Book' value={deleteItem} onChange={handleDeleteChange} />
                                <div>
                                    <button className='btn btn-sm btn-danger' onClick={handleDelete}>Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="add-book">
                            <h3>Add Book</h3>
                            <form>
                                <input type="text" placeholder='Name' name='name' value={bookData.name} onChange={handleInputChange} />
                                <input type="text" placeholder='code' name='code' value={bookData.code} onChange={handleInputChange} />
                                <input type="text" placeholder='author' name='author' value={bookData.author} onChange={handleInputChange} />
                                <input type="text" placeholder='publisher' name='publisher' value={bookData.publisher} onChange={handleInputChange} />
                                <input type="text" placeholder='price' name='price' value={bookData.price} onChange={handleInputChange} />
                                <input type="text" placeholder='website' name='website' value={bookData.website} onChange={handleInputChange} />
                                <div>
                                    <button className='btn btn-sm btn-success' type='submit' onClick={submitHandler}>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="update-book">
                            <h3>Update Book</h3>
                            <form>
                                <input type="text" placeholder='OldCode' name='oldCode' value={updateData.oldCode} onChange={handleUpdateChange} />
                                <input type="text" placeholder='Name' name='name' value={updateData.name} onChange={handleUpdateChange} />
                                <input type="text" placeholder='code' name='code' value={updateData.code} onChange={handleUpdateChange} />
                                <input type="text" placeholder='author' name='author' value={updateData.author} onChange={handleUpdateChange} />
                                <input type="text" placeholder='publisher' name='publisher' value={updateData.publisher} onChange={handleUpdateChange} />
                                <input type="text" placeholder='price' name='price' value={updateData.price} onChange={handleUpdateChange} />
                                <input type="text" placeholder='website' name='website' value={updateData.website} onChange={handleUpdateChange} />
                                <div>
                                    <button className='btn btn-sm btn-warning' type='submit' onClick={updateHandler}>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}

export default BooksList
