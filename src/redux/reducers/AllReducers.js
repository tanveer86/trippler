import {combineReducers} from 'redux';
import AddProductReducer from './AddProductReducer';
import AddVendorReducer from './AddVendorReducer';
import AddUserReducer from './AddUserReducer';
import AddToCartReducer from './AddToCartReducer';

const AllReducer = combineReducers({
    products: AddProductReducer,
    vendors: AddVendorReducer,
    users: AddUserReducer,
    addedToCart: AddToCartReducer

})

export default AllReducer;