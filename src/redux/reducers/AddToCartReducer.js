const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';

let getStorage = JSON.parse(localStorage.getItem('products'));
let productsLocalStorage = []

if(getStorage){
    productsLocalStorage = [...getStorage]
}
const initState={
    products: [...productsLocalStorage],
    addedItems: [],
    total: 0
}
export default (state = initState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            let addedItem = state.products.find(item => item.productId === action.productId)  
            let existed_item= state.addedItems.find(item=> action.productId === item.productId)
            if(existed_item)
            {
               addedItem.quantity += 1 
                return{
                   ...state,
                    total: Number(state.total) + Number(addedItem.productSellingPrice)
                   
                      }
           }
               addedItem.quantity = 1;
               let newTotal = Number(state.total) + Number(addedItem.productSellingPrice)
               let x = {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
               return x;
        case REMOVE_ITEM:
                let itemToRemove= state.addedItems.find(item=> action.productId === item.productId)
                let new_items = state.addedItems.filter(item=> action.productId !== item.productId)   
                let newRemoveTotal = state.total -Number(itemToRemove.productSellingPrice * itemToRemove.quantity)
                console.log(itemToRemove)
                return{
                    ...state,
                    addedItems: new_items,
                    total: newRemoveTotal
                }
        case SUB_QUANTITY:
            let addedItemSub = state.products.find(item=> item.productId === action.productId) 
            if(addedItemSub.quantity === 1){
                let new_itemsSub = state.addedItems.filter(item=>item.productId !== action.productId)
                let newTotalSub = state.total - Number(addedItemSub.productSellingPrice)
                return{
                    ...state,
                    addedItems: new_itemsSub,
                    total: newTotalSub
                }
            }
            else {
                addedItemSub.quantity -= 1
                let newTotal = state.total - Number(addedItemSub.productSellingPrice)
                return{
                    ...state,
                    total: newTotal
                }
            }  
        case  ADD_QUANTITY:
        let addedItemAdd = state.products.find(item=> item.productId === action.productId)
        addedItemAdd.quantity += 1 
        let newTotalAdd = state.total + Number(addedItemAdd.productSellingPrice)
        return{
            ...state,
            total: newTotalAdd
        }   
        default:
            return state;
    }
}