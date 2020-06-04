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
            <Container>
                <Row>
                    <Col md="6">
                        <h6>New member? Sign up below!</h6>
                        <br/>
                        <Signup updateToken={props.updateToken}/>
                        </Col>
                        <Col md='6'>
                        <h6>Already have an account? Login below:</h6>
                        <br/>
                        <br/>
                        <Login updateToken={props.updateToken}/>
                        </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Auth;