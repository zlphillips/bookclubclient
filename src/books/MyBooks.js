import React, {useState, Component} from 'react';
import {Table, Button, Container, Row, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';
import BookEdit from './BookEdit'

const MyBooks = (props) => {
    

    const bookList = () => {
        return props.books.map((book, index) => { {/*Need this to put each book into it's own box, grid-like system*/}
            return(
                        <article key={index}>
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