import React, {useState} from 'react'
import {Container, Row, Col} from 'reactstrap';
import Signup from "./Signup"
import "../home/Navbar"
import Login from './Login'

const Auth = (props) => {


    return( 
        <div>
            <Container>
            <Row>
            <Col xs="auto">       
            <h1>Bookies</h1>
            <h5>A place for book lovers</h5>
            <hr/>
            <p>Bookies is the place to come if you are looking to find unique reviews and recommendations
                for books of all genres. Not only will you find in-depth reviews, but you can leave
                your own as well. Sign up today and find your next great read!
            </p>
            </Col>
            </Row>
            </Container>
            <Signup updateToken={props.updateToken}/>
            <Login />
        </div>
    )
}

export default Auth;