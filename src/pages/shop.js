import { productsArray } from "../REST/store"
import { ProductCard } from "../components/product"
import { Row } from 'react-bootstrap'

function Shop(){
    
    return (<>
        <Row xs={1} md={3} className="justify-content-center">
            {productsArray.map((product, index) => (
                <ProductCard key={index} product={product}/>
            ))}
        </Row>
    
    </>)
}

// product cards

export default Shop