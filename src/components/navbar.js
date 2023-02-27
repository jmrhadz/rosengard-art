import { Button, Navbar, Modal, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../REST/cartContext'
import { InCart } from './product'
import { loadStripe } from '@stripe/stripe-js'

export function NavHeader(){
    const cart = useContext(CartContext)

    const [ showCart, setShowCart ] = useState(false)
    const handleClose = () => setShowCart(false)
    const handleShow = () => setShowCart(true)

    const cartCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    // const checkout = async () => {
    //     console.log("purchase", cart.items)
    //     await fetch('/checkout', {
    //         method: "POST",
    //         heades: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({items: cart.items})
    //     }).then((response) => {
    //         return response.json();
    //     }).then((response) => {
    //         if(response.url){
    //             window.location.assign(response.url)
    //         }
    //     })
    // }

    async function handleCheckout(){
        const stripe = await loadStripe("pk_test_51McO2ZJUAPde3cLuXqp9gR9AyA8tMHVz1qXMTIjJGrK5arnn9ZCGvyV1agJs3gIx8IwHgQHmQuvXBttqxksWD3F100tU319ZXX")
        const { error } = await stripe.redirectToCheckout({
            lineItems: [...cart.items],
            mode: "payment",
            shippingAddressCollection: {allowedCountries:["US"]},
            successUrl: "http://localhost:3000/success",
            cancelUrl: "http://localhost:3000/cancel"
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
                            <Button className="btn btn-black opacity-100">Shop</Button>
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
                    :
                        <h1>There are no items in your cart!</h1>
                
                }
                    </Modal.Body>

                </Modal>

            </>
        )
}

export function NavFooter(){

    return <footer className='d-flex flex-row-reverse justify-content-around fixed-bottom bg-light opacity-75'>
       <Link to="/contact" className='px-1'>Contact Us</Link>
       <Link to="/dashboard" className='px-1'>Admin Use</Link>
    </footer>
}

// links to home, shop, checkout
// cart modal


