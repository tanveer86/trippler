import {combineReducers} from 'redux';
import AddProductReducer from './AddProductReducer';
import AddVendorReducer from './AddVendorReducer';
import AddUserReducer from './AddUserReducer';
import AddToCartReducer from './AddToCartReducer';
import AddOrderReducer from './AddOrderReducer';
import userLogin from './UserLoginReducer';

const AllReducer = combineReducers({
    products: AddProductReducer,
    vendors: AddVendorReducer,
    users: AddUserReducer,
    addedToCart: AddToCartReducer,
    orders: AddOrderReducer,
    userLogin: userLogin
})

export default AllReducer;