import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Homepage from './components/home/Homepage';
import Category from './components/home/Category';
import ProductDetail from './components/home/ProductDetail';
import Booking from './components/home/Booking';
import Sucess from './components/home/Sucess';
import User from './components/user/User';
import OrderList from './components/user/OrderList';
import OrderDetail from './components/user/OrderDetail';
import LiveBidding from './components/user/LiveBidding';
import Register from './components/home/Register';
import Login from './components/home/Login';
import Payments from './components/vendor/Payments';
import BiddingDetail from './components/vendor/BiddingDetail';
import BiddingList from './components/vendor/BiddingList';
import VendorOrderDetail from './components/vendor/OrderDetail';
import VendorOrderList from './components/vendor/OrderList';
import AddingImportProducts from './components/vendor/AddingImportProducts';
import VendorRegistration from './components/home/VendorRegistration';
import AdminAddProduct from './components/admin/AddProduct';
import VendorHome from './components/vendor/VendorHome';


class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/category" exact component={Category} />
                    <Route path="/category/product-detail" exact component={ProductDetail} />
                    <Route path="/booking" exact component={Booking} />
                    <Route path="/sucess" exact component={Sucess} />
                    <Route path="/user" exact component={User} />
                    <Route path="/user/order-list" exact component={OrderList} />
                    <Route path="/user/order-detail" exact component={OrderDetail} />
                    <Route path="/user/live-bidding" exact component={LiveBidding} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/vendor/payments" exact component={Payments} />
                    <Route path="/vendor/bidding-detail" exact component={BiddingDetail} />
                    <Route path="/vendor/bidding-list" exact component={BiddingList} />
                    <Route path="/vendor/order-detail" exact component={VendorOrderDetail} />
                    <Route path="/vendor/order-list" exact component={VendorOrderList} />
                    <Route path="/vendor/import-products" exact component={AddingImportProducts} />
                    <Route path="/vendor-registration" exact component={VendorRegistration} />
                    <Route path="/admin/add-product" exact component={AdminAddProduct} />
                    <Route path="/vendor/home" exact component={VendorHome} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;