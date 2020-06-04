import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Modal, ModalBody, ModalHeader, Button} from 'reactstrap';
import BookCreate from "./BookCreate";
import BookEdit from "./BookEdit";
import BookTable from "./BookTable";
import APIURL from '../Helpers/environment'
import Sitebar from '../home/Navbar'
import MyBookIndex from './MyBookIndex';

const BookIndex = (props) => {
    const [books, setBooks] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState({});
    const fetchBooks = () => {
        fetch(`${APIURL}/bookclub/book/my-books`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData)
            setBooks(logData)
        })
    }
    let buttonStyle = {
        backgroundColor: "#07103A",
        color: "#ffffff"
    }

    const editUpdateBook = (book) =>{
        setBookToUpdate(book);
        console.log(book)
    }
    
    const [modal, setModal] = useState(false);

    const [reviewModal, setReviewModal] = useState(false);

    const toggle = () => setModal(!modal);

    const toggleReviews = () => setReviewModal(!reviewModal);

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <>
        <Sitebar />
            <BookTable books={books} editUpdateBook={editUpdateBook} fetchBooks={fetchBooks}
            token={props.token}/>
                
            {updateActive ? <BookEdit bookToUpdate={bookToUpdate}  token={props.token}
            fetchBooks={fetchBooks}/> : <></>}
            <br/>
            <br/>
            <Button style={buttonStyle} onClick={toggleReviews}>All Book Reviews</Button>
                <Modal isOpen={reviewModal} toggle={toggleReviews} className="review">
                    <ModalHeader toggle={toggleReviews}>All Book Reviews</ModalHeader>
                        <ModalBody>
                            <MyBookIndex setModal={setModal} fetchBooks={props.fetchBooks} token={props.token}/>
                        </ModalBody>
                </Modal>
            <br/>
            <br/>
            <Button style={buttonStyle} onClick={toggle}>Write a Review</Button>
                <Modal isOpen={modal} toggle={toggle} className="review">
                    <ModalHeader toggle={toggle}>Write a new review:</ModalHeader>
                        <ModalBody>
                            <BookCreate setModal={setModal} fetchBooks={fetchBooks} token={props.token}/>
                        </ModalBody>
            </Modal>
            
        </>
    )
}

export default BookIndex;