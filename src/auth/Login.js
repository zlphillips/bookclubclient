import React, {useEffect, useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Container, Row, Col} from 'reactstrap'
import APIURL from "../Helpers/environment";

let inputStyle = {
    textAlign: 'center'
}
let loginStyle = {
    backgroundColor: "#07103A",
    color: "white"
}
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in attempt')
    fetch(`${APIURL}/bookclub/user/signin`, {
        method: "POST",
        body: JSON.stringify({user: {email: email, password: password}}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken);
    })
}

    return(
        <div>
            <Container>
                <Row>
                    <Col  sm="12" md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={(e) => setEmail(e.target.value)} type='email' name="email" value={email} required="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} required=" "/>
                        </FormGroup>
                        <Button style={loginStyle} type="submit">Log In</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;