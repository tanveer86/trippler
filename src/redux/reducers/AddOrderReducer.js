const ORDER_ADDED = 'ORDER_ADDED';

let getStorage = JSON.parse(localStorage.getItem('orders'));
let ordersLocalStorage = []

if(getStorage){
    ordersLocalStorage = [...getStorage]
}

const initState = {
    orders: [...ordersLocalStorage]
}

export default (state = initState, action) => {
    switch(action.type){
        case ORDER_ADDED:
            let addingOrder = {
                orderId: action.orderId,
                orderUserId: action.orderUserId,
                orderVendorId: action.orderVendorId,
                orderProductDetails: action.orderProductDetails,
                orderAddress: action.orderAddress,
                orderCity: action.orderCity,
                orderArea: action.orderArea,
                orderPincode: action.orderPincode,
                orderPaymentMode: action.orderPaymentMode,
                orderTotalPrice: action.orderTotalPrice,
                orderStatus: action.orderStatus,
                orderDate: action.orderDate
            }
            return {
                ...state,
                orders: [...state.orders, addingOrder]
            }
        default:
            return state;
    }
}