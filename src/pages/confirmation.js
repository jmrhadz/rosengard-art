import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"


function Confirmation(){

    return (
        <div className="m-5 p-1 vh-95 bg-dark" >
            <Card className="container">
                 <h1>Success!</h1>
                 <Card.Body className="d-flex flex-row justify-content-around">
                    <p>Thank you for your purchase.  We'll ship your items within a couple of business days.<br/>
                    In the meantime,  <Link to="/contact"><strong>let us know</strong></Link> if there's anything you need.</p>
                    <Link to="/">Home</Link>
                   
                 </Card.Body>
            </Card>
        </div>
        
   
    )
}

export default Confirmation

// link to home
// link to contact