import {combineReducers} from 'redux';
import AddProductReducer from './AddProductReducer';

const AllReducer = combineReducers({
    products: AddProductReducer
})

export default AllReducer;