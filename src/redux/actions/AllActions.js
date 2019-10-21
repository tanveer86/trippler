const PRODUCT_ADDED = "PRODUCT_ADDED";
const VENDOR_ADDED = "VENDOR_ADDED";
const USER_ADDED = "USER_ADDED";
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ORDER_ADDED = 'ORDER_ADDED';
const USER_LOGIN = "USER_LOGIN"

const addingProduct = productData => {
    // console.log(productData)
    return {
        type: PRODUCT_ADDED,
        productId: productData.productId,
        productName: productData.productName,
        productImage: productData.productImage,
        productCategory: productData.productCategory,
        productBrand: productData.productBrand,
        productMFGDate: productData.productMFGDate,
        productVolume: productData.productVolume,
        productAlcohalContent: productData.productAlcohalContent,
        productExpiry: productData.productExpiry,
        productDescription: productData.productDescription,
        productStatus: productData.productStatus,
        productVendor: productData.productVendor,
        productSellingPrice: productData.productSellingPrice
    }
}

const addingVendor = vendorData => {
    // console.log(vendorData)
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

const addingUser = userData => {
    // console.log(userData)
    return {
        type: USER_ADDED,
        userId: userData.userId,
        userName: userData.userName,
        userDOB: userData.userDOB,
        userEmail: userData.userEmail,
        userMobile: userData.userMobile,
        userPassword: userData.userPassword,
        userAadhar: userData.userAadhar,
        userStatus: userData.userStatus,
        userOrderHistory: userData.userOrderHistory

    }
}

const userLogin = loginData => {
    // console.log(loginData)
    return {
        type: USER_LOGIN,
        userId: loginData.userId,
        userName: loginData.userName,
        userDOB: loginData.userDOB,
        userEmail: loginData.userEmail,
        userMobile: loginData.userMobile,
        userPassword: loginData.userPassword,
        userAadhar: loginData.userAadhar,
        userStatus: loginData.userStatus,
        userOrderHistory: loginData.userOrderHistory

    }
}

const addingOrder = orderData => {
    console.log(orderData)
    return {
        type: ORDER_ADDED,
        orderId: orderData.orderId,
        orderUserId: orderData.orderUserId,
        orderVendorId: orderData.orderVendorId,
        orderProductDetails: orderData.orderProductDetails,
        orderAddress: orderData.orderAddress,
        orderCity: orderData.orderCity,
        orderArea: orderData.orderArea,
        orderPincode: orderData.orderPincode,
        orderPaymentMode: orderData.orderPaymentMode,
        orderTotalPrice: orderData.orderTotalPrice,
        orderStatus: orderData.orderStatus,
        orderDate: orderData.orderDate
    }
}

const addToCart= (productId)=>{
    console.log(productId)
    return{
        type: ADD_TO_CART,
        productId: productId,
    }
}

export const removeItem=(productId)=>{
    return{
        type: REMOVE_ITEM,
        productId
    }
}

export const subtractQuantity=(productId)=>{
    return{
        type: SUB_QUANTITY,
        productId
    }
}

export const addQuantity=(productId)=>{
    return{
        type: ADD_QUANTITY,
        productId
    }
}

export {addingProduct, addingVendor, addingUser, addToCart, addingOrder, userLogin}