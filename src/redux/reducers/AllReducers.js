import {combineReducers} from 'redux';
import AddProductReducer from './AddProductReducer';
import AddVendorReducer from './AddVendorReducer';
import AddUserReducer from './AddUserReducer';

const AllReducer = combineReducers({
    products: AddProductReducer,
    vendors: AddVendorReducer,
    users: AddUserReducer
})

export default AllReducer;