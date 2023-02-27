import { createContext, useState } from 'react'
import { getProductData } from './store'

// provides context for the shopping cart, including the list of items in cart and the cart's CRUD operations

// TODO: either save the cart items as a cookie or store it for cart recovery features

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

// provides the cart context to all children
export function CartProvider({children}){

    // Empties the cart on refresh.  This would be handy to keep as a cookie
    const [ cartProducts, setCartProducts ] = useState([])

    // READ quantity in cart
    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.price === id)?.quantity
        if(!quantity){
            return 0;
        }
        return quantity;
    }

    // CREATE item in cart, or UPDATE item in cart (+1)
    function addOneToCart(id){
        const quantity = getProductQuantity(id)

        // if product not found, add product object
        if (quantity === 0){
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        price: id,
                        quantity: 1
                    }
                ]
            )
        // otherwise add one to the product quantity
        } else {
            setCartProducts(
                cartProducts.map(product => {
                    if(product.price === id){
                        product.quantity += 1
                        
                        return product;
                    }else{
                        return product;
                    }
                })
            )
            
        }
    }

    // DELETE item from cart or UPDATE product quantity (-1)
    function removeOneFromCart(id){
        const quantity = getProductQuantity(id)

        // if there's only one, DELETE
        if(quantity === 1) {
            deleteFromCart(id)
        // otherwise take one away from quantity
        } else {
            setCartProducts(
                cartProducts.map(product => {
                    if(product.price === id){
                        product.quantity -= 1
                        
                        return product;
                    }else{
                        return product;
                    }
                })
            )
        }
    }

    //DELETE item from cart
    function deleteFromCart(id){
        setCartProducts(cartProducts => cartProducts.filter(product => product.price !== id)
        )
    }

    // READ total cost
    function getTotalCost(){
        let totalCost = 0

        cartProducts.forEach(cartItem => {
            const productData = getProductData(cartItem.price)
            totalCost += (productData.displayPrice * cartItem.quantity)
        })
        return totalCost;
    }
    
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}