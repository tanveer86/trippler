import {combineReducers} from 'redux';
import AddProductReducer from './AddProductReducer';
import AddVendorReducer from './AddVendorReducer';
import AddUserReducer from './AddUserReducer';
import AddToCartReducer from './AddToCartReducer';
import AddOrderReducer from './AddOrderReducer';

const AllReducer = combineReducers({
    products: AddProductReducer,
    vendors: AddVendorReducer,
    users: AddUserReducer,
    addedToCart: AddToCartReducer,
    orders: AddOrderReducer

})

export default AllReducer;