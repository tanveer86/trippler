const PRODUCT_ADDED = "PRODUCT_ADDED";
const VENDOR_ADDED = "VENDOR_ADDED";

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

const addingVendor = vendorData => {
    console.log(vendorData)
    return {
        type: VENDOR_ADDED,
        vendorId: vendorData.vendorId,
        vendorName: vendorData.vendorName,
        vendorEmail: vendorData.vendorEmail,
        vendorMobile: vendorData.vendorMobile,
        vendorPassword: vendorData.vendorPassword,
        vendorArea: vendorData.vendorArea,
        vendorCity: vendorData.vendorCity,
        vendorPIN: vendorData.vendorPIN,
        vendorLicense: vendorData.vendorLicense,
        vendorGST: vendorData.vendorGST,
        vendorLogo: vendorData.vendorLogo,
        vendorStatus: vendorData.vendorStatus
    }
}

export {addingProduct, addingVendor}