import { Card } from "react-bootstrap"
import Contact from "./contact"

function Cancel(){

    return (
    <div className="m-5 p-1">
        <Card>
            <Card.Header><h3>We're sorry to see you've cancelled your Stripe payment.</h3></Card.Header>
            <Card.Body><h5>Let us know if there's anything we can do.</h5></Card.Body>
            <Card.Footer><Contact source="cancel"/></Card.Footer>
        </Card>
    </div>
    )
}

// contact page

export default Cancel
