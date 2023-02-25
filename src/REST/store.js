const productsArray = [
   
    {
        id: "1",
        title: "Alphabet Mug",
        price: 24.99
    },
    {
        id: "2",
        title: "Alphabet Print",
        price: 9.99
    },
    {
        id: "3",
        title: "Alphabet Towel",
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