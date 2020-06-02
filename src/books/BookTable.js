import React, {useState} from 'react';
import {Table, Button, Container, Row, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';

const BookTable = (props) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const bookList = () => {
        return props.books.map((book, index) => { {/*Need this to put each book into it's own box, grid-like system*/}
            return(
                        <article key={index}>
                           Title: {book.title} <br/>
                            Author: {book.author} <br/>
                            Genre: {book.genre}  <br/>
                            Pages: {book.length}  <br/>
                            <a onClick={toggle}>Read Review</a>
                            <Modal isOpen={modal} toggle={toggle} className="viewReview">
                            <ModalHeader toggle={toggle}>Review for '{book.title}'</ModalHeader>
                            <ModalBody>
                            {book.review}
                            </ModalBody>
                            </Modal> <br/>
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

export default BookTable;