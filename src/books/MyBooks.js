import React, {useState, Component} from 'react';
import {Table, Button, Container, Row, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';
import BookEdit from './BookEdit'

const MyBooks = (props) => {

    const allBooksStyle = {
        border: "1px solid black",
        textAlign: 'center',
        padding: "4px"
    }
    

    const bookList = () => {
        return props.books.map((book, index) => { {/*Need this to put each book into it's own box, grid-like system*/}
            return(
                        <article style={allBooksStyle} key={index}>
                           Title: {book.title} <br/>
                            Author: {book.author} <br/>
                            Genre: {book.genre}  <br/>
                            Pages: {book.length}  <br/>
                            Rating: {book.rating} <br/>
                            Review: {book.review} <br/>
                        </article>
            )
        })
    }

    return(
       <div>
            {bookList()}
       </div>
    )
}

export default MyBooks;