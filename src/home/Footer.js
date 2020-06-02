import React, {useState} from "react"
import {Container, Row, Col, Input, Button, Form, FormGroup} from 'reactstrap'

const Footer = () => {

    const [ email, setEmail ] = useState('');

    const buttonStyle = {
        backgroundColor: "#07103A",
        color: "#ffffff"
    }

    return (
        <div className="mainFooter">
            <hr/>
            <Container>
                <Row>
                    <Col className="newsletter" sm="4">
                        <h6>Subscribe to our Newsletter</h6>
                        <Form>
                        <FormGroup>  
                        <Input onChange={(e) => setEmail(e.target.value)} type="email" name={email} placeholder="Email" required="email"/>
                        </FormGroup>
                        <Button style={buttonStyle} type="submit">Subscribe</Button>
                        </Form>
                    </Col>
                    <Col className="socials" xs="6" sm="4">
                        <h6>Join Our Social Media Groups</h6>
                    </Col>
                    <Col className="contactUs" xs="6" sm="4">
                        <h6>Have a question? Message us:</h6>
                        <Form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/zacharylphillips@gmail.com" method="post">
                            <FormGroup id="fs-frm-inputs">
                            <Input type="text" name="name" id="full-name" placeholder="Full Name" required=" "/>
                            <Input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required="email"/>
                            <Input type="textarea" rows="5" name="message" id="message" placeholder="How may we help you?" required=" "/>
                            <Input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                            <Input id='submitButton' type="submit" value="Send Message"/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;