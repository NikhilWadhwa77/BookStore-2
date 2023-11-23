import React from 'react'

const BookCard = (props) => {

    const link = "https://www." + props.website

    return (
        <>
            <tr>
                <td className="col">{props.name}</td>
                <td className="col">{props.code}</td>
                <td className="col">{props.author}</td>
                <td className="col">{props.publisher}</td>
                <td className="col">{props.price}</td>
                <td className="col"><a href={link}>{props.website}</a></td>
            </tr>

        </>
    )
}

export default BookCard
