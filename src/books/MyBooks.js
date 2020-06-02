import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import APIURL from '../Helpers/environment'

const MyBooks = (props) => {
        fetch(`${APIURL}/bookclub/book/my-books`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.fetchBooks(props.user.owner))
    return(
        <div>
            <h3>My Books</h3>
            {MyBooks()}
        </div>
        
    )
    }

export default MyBooks;