import { useRef } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { contactAPI } from '../REST/contactApi'
import { redirect } from 'react-router-dom'

// Here's a contact form that allows the admin CRUD operations through contactApi (currently using mockAPI, ugh)
// It passes the user input (name, email, message) and administrative info (creation date, progress boolean, and the source page)

// TODO: migrate to another backend
// TODO: add client-side validation, particularily for the email input
// TODO: add phone number and recaptcha

function Contact({source}){

    // use ref hooks so the component doesn't rerender on every key press
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    // POST on submit
    const handleSubmit = () => {
        
        const message = 
            {
                createdAt: new Date(),
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
                completed: false,
                source: source ? source : "contact-page"
            }
        
        //reset forms
        emailRef.current.value = ""
        nameRef.current.value = ""
        messageRef.current.value = ""

        // POST to backend
        contactAPI.post(message)
               .then(redirect('./success'))
    }

    return (
        <Card bg='secondary' className="shadow">
            <Card.Header><h2>Contact Us</h2></Card.Header>
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

export default Contact