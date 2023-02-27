import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { CartContext } from "../REST/cartContext"
import { useContext } from "react"
import { getProductData } from "../REST/store"

// the product card displays basic product information
// product detail should link to more details for a product
// and in cart shows basic cart info

// TODO: add product photos to card
// TODO: add number selecter instead of +/-
// TODO: link to a detail page so that more information can be displayed

function ProductCard({ product }){
    const cart = useContext(CartContext)
    const quantityInCart = cart.getProductQuantity(product.price)
    return (
<Card className="m-2 p-2 col">
    <Card.Body>
        <Card.Title className="text-dark">
            {product.title}
        </Card.Title>
        <Card.Text className="text-dark">${product.displayPrice}  </Card.Text>
        {quantityInCart > 0 ? 
        <>
            <Form as={Row}>
                <Form.Label column="true" sm="6">In Cart: {quantityInCart}</Form.Label>
                <Col sm="6">
                    <Button variant="Dark" sm="6" onClick={()=>cart.addOneToCart(product.price)} className="mx-2">+</Button>
                    <Button variant="warning" sm="6" onClick={()=>cart.removeOneFromCart(product.price)} className="mx-2">-</Button>
                </Col>
            </Form>
        </>
        :
        <Button variant="dark" onClick={()=>cart.addOneToCart(product.price)}>Add to Cart</Button>
        }
        
    </Card.Body>
</Card>

    )
}


// TODO:
// function ProductDetail({ product }){

//     return <h1>Product Detail Page</h1>
// }


// InCart displays quantity and subtotal and allows the user to delete/remove the item fom the cart

function InCart({ price, quantity }){
    const cart = useContext(CartContext)
    const productData = getProductData(price)
    

    return (
        <>
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>${(quantity * productData.displayPrice).toFixed(2) }</p>
        <Button size="sm" onClick={()=>cart.deleteFromCart(price)}>Remove</Button>
        <hr></hr>
        </>
    )
}

export { ProductCard, InCart }