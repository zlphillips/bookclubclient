import React, {useEffect, useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Container, Col, Row} from 'reactstrap';
import APIURL from "../Helpers/environment"


const Signup = (props) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const inputStyle = {
        textAlign: 'center'
    }
    const buttonStyle = {
        backgroundColor: "#07103A",
        color: "#ffffff"
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/bookclub/user/new-user`, {
            method: "POST",
            body: JSON.stringify({user: {firstName: firstName, lastName: lastName, email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data.sessionToken)
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div className="signupForm">
            <Container>
                <Row>
                    <Col sm="6" md={{ size: 6, offset: 3 }}>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input style={inputStyle} onChange={(e) => setFirstName(e.target.value)} name="firstName" required=" "value={firstName}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input style={inputStyle} onChange={(e) => setLastName(e.target.value)} name="lastName" required=" "value={lastName}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input style={inputStyle} onChange={(e) => setEmail(e.target.value)} name="email" type="email" required="email" value={email}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input style={inputStyle} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required minLength="5" value={password}/>
                            </FormGroup>
                            <Button style={buttonStyle}type="submit">Sign Up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup;