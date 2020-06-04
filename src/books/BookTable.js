import React, {useState, Component} from 'react';
import {Table, Button, Container, Row, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';
import BookEdit from './BookEdit'
import APIURL from '../Helpers/environment'

const BookTable = (props) => {
    const [books, setBooks] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState({});

    const bookRow = {
        margin: "0px",
        border: "1px solid"
    }

    const buttonCol = {
        paddingBottom: '6px',
        paddingTop: '10px'
    }

    let buttonStyle = {
        backgroundColor: "#07103A",
        color: "#ffffff"
    }
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const bookList = () => {
        const deleteBook = (book) => {
            fetch(`${APIURL}/bookclub/book/${book.id}`, {
                method: 'DELETE',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then(() => props.fetchBooks())
        }
        return props.books.map((book, index) => { {/*Need this to put each book into it's own box, grid-like system*/}
            return(
                        
                        <Container key={index} className='bookContainer'>
                            <Row style={bookRow}>
                                <Col xs="2" className="bookCol">
                                    Title: {book.title} <br/>
                                </Col>
                                <Col xs='2' className="bookCol">
                                    Author: {book.author} <br/>
                                </Col>
                                <Col xs="2" className="bookCol">
                                    Genre: {book.genre}  <br/>
                                </Col>
                                    Pages: {book.length}  <br/>
                                <Col xs='2' className="bookCol">
                                    Rating: {book.rating} <br/>
                                </Col>
                                <Col xs='2' className="bookCol">
                                    Review: {book.review} <br/>
                                </Col>
                                <Col xs='12' style={buttonCol}>
                                <Button style={buttonStyle} onClick={()=>{
                                    setBookToUpdate(book)
                                    console.log(book)
                                    toggle()
                                    
                                    }}>Revise!</Button>
                                    
                                    <Button color='danger' onClick={() => {deleteBook(book)}}>Delete</Button>
                                    </Col>
                                </Row>
                                <br/>
                        </Container>
            )
        })
    }

    return(
       <div>
            <h2>Book Reviews</h2>
            <hr/>
            {bookList()}
            
            <Modal isOpen={modal} toggle={toggle} className="review">
                                        <ModalHeader toggle={toggle}>Edit Review for {bookToUpdate.title}:</ModalHeader>
                                        <ModalBody>
                                        <BookEdit setModal={setModal} fetchBooks={props.fetchBooks} bookToUpdate={bookToUpdate} token={props.token}/>
                                        </ModalBody>
                                </Modal>
       </div>
    )
}

export default BookTable;