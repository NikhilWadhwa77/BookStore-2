import React from 'react'
import './Books.css'
import BooksList from './BooksList'

const Books = () => {
    return (
        <>
            <div className="books-heading">
                <h1>Achhi Kitabein</h1>
            </div>
            <BooksList />
        </>
    )
}

export default Books
