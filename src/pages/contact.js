import { useState, useRef } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'

function Contact(){
    const [ email, setEmail ] = useState("")
    const [ name, setName ] = useState("")
    const [ message, setMessage ] = useState("")
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    const handleSubmit = () => {
        setEmail(emailRef)
        setName(nameRef)
        setMessage(messageRef)
        console.log(email, name, message)
    }

    return (
        <Card bg='secondary' className="shadow">
            <Card.Header><h2>Contact Us {email} {name} {message}</h2></Card.Header>
            <Card.Body>
                <Form bg="warning">
                    <Row className="m-3" >
                        <Col><Form.Control ref={emailRef} aria-label="Email address"id="email" type="email" placeholder="Your Email address"/></Col>
                        <Col><Form.Control ref={nameRef} id="name" aria-label="name"type="text" placeholder="Your Name"/></Col>
                        
                    </Row>
                    
                    <Form.Control ref={messageRef} as="textarea" id="message" aria-label="message"type="textarea" placeholder="How can we help?"/>
                </Form>
            </Card.Body>
            <Card.Footer className="justify-content-end">
                <Button onClick={handleSubmit}  bg="light">Submit</Button>
            </Card.Footer>
        </Card>
        )
}

// form includes: email address, name, message, submit button

export default Contact