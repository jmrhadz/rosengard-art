import { createContext, useState } from 'react'
import { getProductData } from './store'

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}){
    const [ cartProducts, setCartProducts ] = useState([])

    // fetch orders

    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.price === id)?.quantity
        if(!quantity){
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id)

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

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id)

        if(quantity === 1) {
            deleteFromCart(id)
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

    function deleteFromCart(id){
        setCartProducts(cartProducts => cartProducts.filter(product => product.price !== id)
        )
    }

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