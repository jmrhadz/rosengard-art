import { productsArray } from "../REST/store"
import { ProductCard } from "../components/product"
import { Row } from 'react-bootstrap'

// Displays product cards

// TODO: when more products are added: tags, categories and sorting would be helpful
// TODO: maybe a modal for the product detail component

function Shop(){
    
    return (<>
        <Row xs={1} md={3} className="justify-content-center">
            {productsArray.map((product, index) => (
                <ProductCard key={index} product={product}/>
            ))}
        </Row>
    
    </>)
}


export default Shop