import { Button, Navbar, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../REST/cartContext'
import { InCart } from './product'
import { loadStripe } from '@stripe/stripe-js'

// A lot of stuff happens in the Navbar: The navbar, the shopping cart modal and the footer are contained in this document
// The cart uses a context hook to update the quantity and state hooks to be visible

//TODO: isolate the shopping cart modal from the navbar
//TODO: On the shop page, the Call To Action in the navbar (the shop button) should start the checkout process
//TODO: integrate stripe components so that checkout is happening on site, not on a different domain
//   (sideTODO:) This could also help with getting the checkout info (minus the tokenized CC info) from Stripe to integrate into the admin dashboard

export function NavHeader(){

    // cart context imported from provider
    const cart = useContext(CartContext)

    // Initializing the shopping cart visibility and the handlers
    const [ showCart, setShowCart ] = useState(false)
    const handleClose = () => setShowCart(false)
    const handleShow = () => setShowCart(true)

    // calculating the total qauntity of items in cart
    const cartCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    // handle the checkout > redirect to a stripe checkout session, redirect to success and confirmation pages
    async function handleCheckout(){
        const stripe = await loadStripe("pk_test_51McO2ZJUAPde3cLuXqp9gR9AyA8tMHVz1qXMTIjJGrK5arnn9ZCGvyV1agJs3gIx8IwHgQHmQuvXBttqxksWD3F100tU319ZXX")
        const { error } = await stripe.redirectToCheckout({
            lineItems: [...cart.items],
            mode: "payment",
            shippingAddressCollection: {allowedCountries:["US"]},
            successUrl: "https://www.rosengard.co/success",
            cancelUrl: "https://www.rosengard./cancel"
        })
        console.log(error)
    }

    return (
            <>
                <Navbar bg="primary" expand="sm" className="shadow px-3 fixed-top opacity-75">
                    <Navbar.Brand>
                        <Link to="/">Rosengard</Link></Navbar.Brand>
                    <Navbar.Toggle />
                    
                    <Navbar.Collapse className="justify-content-end">
                        <Button onClick={handleShow} className="btn btn-info">View Cart ({cartCount})</Button>
                        <Link to="/shop">
                            <Button className="btn btn-danger opacity-100">Shop</Button>
                        </Link>
                        
                    </Navbar.Collapse>
                </Navbar>
               
                <Modal  show={showCart} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-dark">Shopping Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-dark">
                    {cartCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, index) => (
                                <InCart key={index} price={currentProduct.price} quantity={currentProduct.quantity}></InCart>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={handleCheckout}>
                                Purchase Items
                            </Button>
                        </>
                    : <h1>There are no items in your cart!</h1>
                }
                    </Modal.Body>
                </Modal>
            </>
        )
}


// the footer currently only provides links to the contact page and the admin dashboard
// TODO: add social links and about links

export function NavFooter(){

    return <footer className='d-flex flex-row-reverse justify-content-around fixed-bottom bg-light opacity-75'>
       <Link to="/contact" className='px-1'>Contact Us</Link>
       <Link to="/dashboard" className='px-1'>Admin Use</Link>
    </footer>
}

