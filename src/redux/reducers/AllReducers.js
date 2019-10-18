import {combineReducers} from 'redux';
import AddProductReducer from './AddProductReducer';
import AddVendorReducer from './AddVendorReducer';

const AllReducer = combineReducers({
    products: AddProductReducer,
    vendors: AddVendorReducer
})

export default AllReducer;