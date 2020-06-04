import React, {useState, Component} from 'react';
import {Table, Button, Container, Row, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';
import BookEdit from './BookEdit'

const MyBooks = (props) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const editToggle = () => setModal(!modal);

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
                            <a onClick={editToggle}>Edit Review</a>
                            <Modal isOpen={modal} toggle={editToggle} className="editReview">
                            <ModalHeader toggle={editToggle}>Edit Review for '{book.title}'</ModalHeader>
                            <ModalBody>
                                <BookEdit />
                            </ModalBody>
                            </Modal>
                        </article>
            )
        })
    }

    return(
       <div>
            <h2>Book Reviews</h2>
            <hr/>
            {bookList()}
       </div>
    )
}

export default MyBooks;