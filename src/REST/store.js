
// this stores the products available and a function to get the title and price
// Stripe wants the id labeled as "price", so instead of parsing it in the call, it's set here
// Prices here only matter in the cart. Stripe will use prices on its dashboard as the final price

// TODO: add images, blurbs and detailed descriptions

const productsArray = [
   
    {
        price: "price_1MfTKxJUAPde3cLuZkUec0Of",
        title: "Magnolia Mug",
        displayPrice: 30.00
    },
    {
        price: "price_1MfTNYJUAPde3cLuthVyPU2G",
        title: "Orange Shino Nesting Prep Bowls",
        displayPrice: 30.00
    },
    {
        price: "price_1MfTOyJUAPde3cLu6c99MnwT",
        title: "The Foxfires in Nijushiko Vase",
        displayPrice: 60.00
    }
]

function getProductData(id) {
    console.log(id)
    let productData = productsArray.find(product => product.price === id)
    if(!productData){
        console.log("Product data does not exist for ID:", id);
        return undefined;
    }

    return productData
}

export { productsArray, getProductData }