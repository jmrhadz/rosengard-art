import { Button, Navbar, Modal, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../REST/cartContext'
import { InCart } from './product'

export function NavHeader(){
    const cart = useContext(CartContext)

    const [ showCart, setShowCart ] = useState(false)
    const handleClose = () => setShowCart(false)
    const handleShow = () => setShowCart(true)

    const cartCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            heades: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url){
                window.location.assign(response.url)
            }
        })
    }


    return (
            <>
                <Navbar bg="primary" expand="sm" className="shadow px-3">
                    <Navbar.Brand>
                        <Link to="/">Rosengard</Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-beginning">
                        <Nav>
                            <Link to="/contact">Contact</Link>
                        </Nav>           
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Button onClick={handleShow}>Cart ({cartCount}) Items</Button>
                        <Link to="/shop">
                            <Button className="btn btn-secondary">Buy Now</Button>
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
                                <InCart key={index} id={currentProduct.id} quantity={currentProduct.quantity}></InCart>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
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

    return <footer>
        <Link to="/admin/dashboard/orders">Admin Dashboard</Link>
    </footer>
}

// links to home, shop, checkout
// cart modal


