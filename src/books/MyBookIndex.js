import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Modal, ModalBody, ModalHeader, Button} from 'reactstrap';
import APIURL from '../Helpers/environment'
import MyBooks from '../books/MyBooks';

const MyBookIndex = (props) => {

    const [books, setBooks] = useState([]);
    const fetchBooks = () => {
        fetch(`${APIURL}/bookclub/book/all-books`, {
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

    useEffect(() => {
        fetchBooks();
    }, [])


    return (
        <>
            <MyBooks books={books} fetchBooks={fetchBooks}
            token={props.token}/>
        </>
    )
}

export default MyBookIndex;