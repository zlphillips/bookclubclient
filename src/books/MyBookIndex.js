import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Modal, ModalBody, ModalHeader, Button} from 'reactstrap';
import BookCreate from "./BookCreate";
import BookEdit from "./BookEdit";
import BookTable from "./BookTable";
import APIURL from '../Helpers/environment'
import Sitebar from '../home/Navbar'

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

    const editUpdateBook = (book) =>{
        setBookToUpdate(book);
        console.log(book)
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    useEffect(() => {
        fetchBooks();
    }, [])


    return (
        <>
        <Sitebar />
            <BookTable books={books} editUpdateBook={editUpdateBook} updateOn={updateOn} fetchBooks={fetchBooks}
            token={props.token}/>
                
            {updateActive ? <BookEdit bookToUpdate={bookToUpdate} updateOff={updateOff} token={props.token}
            fetchBooks={fetchBooks}/> : <></>}
            <Button onClick={toggle}>Write a Review</Button>
            <Modal isOpen={modal} toggle={toggle} className="review">
            <ModalHeader toggle={toggle}>Write a new review:</ModalHeader>
            <ModalBody>
                <BookCreate fetchBooks={fetchBooks} token={props.token}/>
            </ModalBody>
            </Modal>
        </>
    )
}

export default BookIndex;