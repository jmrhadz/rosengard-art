import { useState, useRef } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { contactAPI } from '../REST/contactApi'

function Contact(){
    const [ email, setEmail ] = useState("")
    const [ name, setName ] = useState("")
    const [ message, setMessage ] = useState("")
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    const handleSubmit = () => {
        let date = new Date()
        const message = 
            {
                createdAt: date.toDateString(),
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
                completed: false
                
               }
        // emailRef.current.value = ""
        // nameRef.current.value = ""
        // messageRef.current.value = ""
        contactAPI.post(message)
    }

    return (
        <Card bg='secondary' className="shadow">
            <Card.Header><h2>Contact Us {email} {name} {message}</h2></Card.Header>
            <Card.Body>
                <Form bg="warning">
                    <Row className="m-3" >
                        <Col><Form.Control ref={emailRef} aria-label="Email address"id="email" type="email" placeholder="Your Email address" required/></Col>
                        <Col><Form.Control ref={nameRef} id="name" aria-label="name"type="text" placeholder="Your Name" required/></Col>
                        
                    </Row>
                    
                    <Form.Control ref={messageRef} as="textarea" id="message" aria-label="message"type="textarea" placeholder="How can we help?" required/>
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