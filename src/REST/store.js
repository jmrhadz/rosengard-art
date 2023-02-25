const productsArray = [
   
    {
        id: "price_1MfTKxJUAPde3cLuZkUec0Of",
        title: "Alphabet Mug",
        price: 24.99
    },
    {
        id: "price_1MfTNYJUAPde3cLuthVyPU2G",
        title: "Alphabet Print",
        price: 9.99
    },
    {
        id: "price_1MfTOyJUAPde3cLu6c99MnwT",
        title: "Alphabet Pitcher",
        price: 49.99
    }
]

function getProductData(id) {
    console.log(id)
    let productData = productsArray.find(product => product.id === id)
    if(!productData){
        console.log("Product data does not exist for ID:", id);
        return undefined;
    }

    return productData
}

export { productsArray, getProductData }