import { Card } from "react-bootstrap"
import Contact from "./contact"

// The cancel page is a landing page for stripe checkout redirects.  If the user leaves a stripe session, this page is displayed
// it contains a contact form in the card footer that passes "cancel" as the source, so that contact from this page can be highlighted

//TODO:  save cart for later
//TODO: add some sort of are you sure with shiny, happy people using products

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


export default Cancel
