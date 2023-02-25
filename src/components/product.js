import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { CartContext } from "../REST/cartContext"
import { useContext } from "react"
import { getProductData } from "../REST/store"

function ProductCard({ product }){
    const cart = useContext(CartContext)
    const quantityInCart = cart.getProductQuantity(product.id)
    return (
<Card className="m-2 p-2 col">
    <Card.Body>
        <Card.Title className="text-dark">
            {product.title}
        </Card.Title>
        <Card.Text className="text-dark">${product.price}  </Card.Text>
        {quantityInCart > 0 ? 
        <>
            <Form as={Row}>
                <Form.Label column="true" sm="6">In Cart: {quantityInCart}</Form.Label>
                <Col sm="6">
                    <Button variant="Dark" sm="6" onClick={()=>cart.addOneToCart(product.id)} className="mx-2">+</Button>
                    <Button variant="warning" sm="6" onClick={()=>cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                </Col>
            </Form>
        </>
        :
        <Button variant="dark" onClick={()=>cart.addOneToCart(product.id)}>Add to Cart</Button>
        }
        
    </Card.Body>
</Card>

    )
}

function ProductDetail({ product }){

    return <h1>Product Detail Page</h1>
}

function InCart({ id, quantity }){
    const cart = useContext(CartContext)
    const productData = getProductData(id)
    

    return (
        <>
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2) }</p>
        <Button size="sm" onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
        <hr></hr>
        </>
    )
}

export { ProductCard, ProductDetail, InCart }