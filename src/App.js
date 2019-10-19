import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Homepage from './components/home/Homepage';
import Category from './components/home/Category';
import Brand from './components/home/Brand';
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
import Search from './components/home/Search';
import VendorLogin from './components/home/VendorLogin';


class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={props => <Homepage {...props} /> } />
                    <Route path="/:productCategory" exact render={props => <Category {...props} /> } />
                    <Route path="/brand/:productBrand" exact render={props => <Brand {...props} /> } />
                    <Route path="/product/:productName" exact render={props => <ProductDetail {...props} /> } />
                    <Route path="/booking/cart" exact component={Booking} />
                    <Route path="/user/sucess" exact component={Sucess} />
                    <Route path="/user/profile" exact component={User} />
                    <Route path="/user/order-list" exact component={OrderList} />
                    <Route path="/user/order-detail" exact component={OrderDetail} />
                    <Route path="/user/live-bidding" exact component={LiveBidding} />
                    <Route path="/user/register" exact render={props => <Register {...props} /> } />
                    <Route path="/login" exact component={Login} />
                    <Route path="/vendor/payments" exact component={Payments} />
                    <Route path="/vendor/bidding-detail" exact component={BiddingDetail} />
                    <Route path="/vendor/bidding-list" exact component={BiddingList} />
                    <Route path="/vendor/order-detail" exact component={VendorOrderDetail} />
                    <Route path="/vendor/order-list" exact component={VendorOrderList} />
                    <Route path="/vendor/import-products" exact component={AddingImportProducts} />
                    <Route path="/vendor/registration" exact component={VendorRegistration} />
                    <Route path="/admin/add-product" exact component={AdminAddProduct} />
                    <Route path="/vendor/home" exact component={VendorHome} />
                    <Route path="/search/results" exact component={Search} />
                    <Route path="/vendor/login" exact component={VendorLogin} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;