import Contact from "./contact"

function Cancel(){

    return (
    <>
        <h4>We're sorry to see you've cancelled your Stripe payment.  Let us know if there's anything we can do.</h4>
        <Contact source="cancel"/>

    </>
    )
}

// contact page

export default Cancel
