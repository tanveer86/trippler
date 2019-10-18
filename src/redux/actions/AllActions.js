const PRODUCT_ADDED = "PRODUCT_ADDED";

const addingProduct = productData => {
    // console.log(productData)
    return {
        type: PRODUCT_ADDED,
        productId: productData.productId,
        productName: productData.productName,
        productImage: productData.productImage,
        productCategory: productData.productCategory,
        productBrand: productData.productBrand,
        productPrice: productData.productPrice,
        productVolume: productData.productVolume,
        productAlcohalContent: productData.productAlcohalContent,
        productExpiry: productData.productExpiry,
        productDescription: productData.productDescription,
        productStatus: productData.productStatus
    }
}

export {addingProduct}