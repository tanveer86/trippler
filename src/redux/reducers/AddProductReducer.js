const PRODUCT_ADDED = "PRODUCT_ADDED";

let getStorage = JSON.parse(localStorage.getItem('products'));
let productsLocalStorage = []

if(getStorage){
    productsLocalStorage = [...getStorage]
}

const initState = {
    products: [...productsLocalStorage]
}

export default (state = initState, action) => {
    switch(action.type){
        case PRODUCT_ADDED:
            let addingProduct = {
                productId: action.productId,
                productName: action.productName,
                productImage: action.productImage,
                productCategory: action.productCategory,
                productBrand: action.productBrand,
                productPrice: action.productPrice,
                productVolume: action.productVolume,
                productAlcohalContent: action.productAlcohalContent,
                productExpiry: action.productExpiry,
                productDescription: action.productDescription,
                productStatus: action.productStatus
            };
            return {
                ...state,
                products: [...state.products, addingProduct]
            }
        default:
            return state;
    }
}