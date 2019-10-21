import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import {connect} from 'react-redux';
import { removeItem, addQuantity, subtractQuantity, addingOrder } from '../../redux/actions/AllActions';
import CartUserDetails from '../layout/CartUserDetails';
import Footer from '../layout/Footer';

let userLogin = JSON.parse(localStorage.getItem('userLogin'));
let todayDate = new Date().toDateString();

let ordersStorage = [];
let getStorage = JSON.parse(localStorage.getItem('orders'));

if(getStorage){
    ordersStorage = [...getStorage]
}

class Booking extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orderId: null,
            orderUserId: userLogin.userName,
            orderVendorId: '',
            orderProductDetails: [],
            orderAddress: '',
            orderCity: 'Bangalore',
            orderArea: '',
            orderPincode: '',
            orderPaymentMode: 'Cash on Delivery',
            orderTotalPrice: this.props.addToCart.total,
            orderStatus: true,
            orderDate: todayDate
        }
    }

    orderInputChange = (orderInput) => {
        this.setState({[orderInput.target.name]: orderInput.target.value})
    }

    orderInputSubmit = (orderSubmit) => {
        orderSubmit.preventDefault();
        let uniqueId = Math.floor(Math.random()*1000000);
        let newOrder = {
            orderId: uniqueId,
            orderUserId: this.state.orderUserId,
            orderVendorId: this.state.orderVendorId,
            orderProductDetails: this.props.addToCart.addedItems,
            orderAddress: this.state.orderAddress,
            orderCity: this.state.orderCity,
            orderArea: this.state.orderArea,
            orderPincode: this.state.orderPincode,
            orderPaymentMode: this.state.orderPaymentMode,
            orderTotalPrice: this.state.orderTotalPrice,
            orderStatus: this.state.orderStatus,
            orderDate: this.state.orderDate
        }
        this.props.addingOrder(newOrder);
        ordersStorage.push(newOrder);
        localStorage.setItem("orders",JSON.stringify(ordersStorage));
        this.props.history.push('/user/sucess');
        // console.log(newOrder)
    }

    handleRemove = (productId)=>{
        this.props.removeItem(productId);
    }

    handleAddQuantity = (productId)=>{
        this.props.addQuantity(productId);
    }

    handleSubtractQuantity = (productId)=>{
        this.props.subtractQuantity(productId);
    }

    render() {
        let showCartProducts = this.props.addToCart.addedItems.map((eachProduct) => {
            return(
                <div class="col-4 text-center" key={eachProduct.productId}>
                    <img src={eachProduct.productImage} height="150"/>
                    <h4 class="mt-2">{eachProduct.productName}</h4>
                    <p class="font-weight-bolder">{eachProduct.productSellingPrice}</p>
                    <div class="float-left ml-2"><img src="https://img.icons8.com/cotton/2x/minus--v2.png" width="40" height="40" onClick={()=>{this.handleSubtractQuantity(eachProduct.productId)}}></img></div>
                    <p class="float-left">Quantity: {eachProduct.quantity}</p>
                    <div class="float-left "><img src="https://img.icons8.com/cotton/2x/plus--v2.png" width="40" height="40" onClick={()=>{this.handleAddQuantity(eachProduct.productId)}}></img></div>
                    <div class="float-left "><img src="https://cdn6.aptoide.com/imgs/6/7/b/67bacc637d58c80da40a5c2ec6d6f74d_icon.png?w=240" onClick={()=>{this.handleRemove(eachProduct.productId)}} width="40" height="30"></img></div>
                </div>  
            )
        })
        return(
            <React.Fragment>
                <TopBar />
                <Header />
                <Nav />
                <div class="container mt-5 mb-5">
                    <div class="row">
                        <div class="col-9">
                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    1. Products in Your Cart
                                    </button>
                                </h2>
                                </div>
    
                                <div id="collapseOne" class="collapse show text-center" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="row">
                                            {showCartProducts}
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-danger m-3 font-weight-bolder btn-lg" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Continue to Checkout</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    2. Your Account Details
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body text-center">
                                    <CartUserDetails />
                                    <button type="button" class="btn btn-danger m-3 font-weight-bolder btn-lg" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Continue to Checkout</button>
                                    
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    3. Delivery Details
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    <form onSubmit={this.orderInputSubmit}>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" class="form-control" placeholder="Enter Your Full Address" value={this.state.orderAddress} name="orderAddress" onChange={this.orderInputChange} required />
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label>City</label>
                                                <select class="form-control" value={this.state.orderCity} name="orderCity" onChange={this.orderInputChange} >
                                                    <option selected>Bangalore</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Area</label>
                                                <input type="text" class="form-control" name="orderArea" value={this.state.orderArea} required onChange={this.orderInputChange} placeholder="Enter Your Area" />
                                            </div>
                                            <div class="form-roup col-md-2">
                                                <label>Pin Code</label>
                                                <input type="number" class="form-control" name="orderPincode" value={this.state.orderPincode} required onChange={this.orderInputChange} placeholder="Enter Your Pin Code" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Payment Mode</label>
                                            <select class="form-control" value={this.state.orderPaymentMode} name="orderPaymentMode" onChange={this.orderInputChange}>
                                                <option>Select a Payment Mode</option>
                                                <option>Cash On Delivery</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input checked class="form-check-input" type="checkbox" />
                                                <label class="form-check-label">
                                                    I agree to the Trippler's terms and conditions.
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-danger btn-lg font-weight-bolder">Place Your Order</button>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-3 bg-danger text-white font-weight-bolder">
                            <h3 class="text-center p-3">Your Cart Details</h3>
                            <p>Total Items: {this.props.addToCart.addedItems.length}</p>
                            <p>Delivery Charges: Free</p>
                            <p>Purchasing From: Madhuloka</p>
                            <p>Total Price: Rs. {this.props.addToCart.total}</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addToCart: state.addedToCart,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (productId)=>{dispatch(removeItem(productId))},
        addQuantity: (productId)=>{dispatch(addQuantity(productId))},
        subtractQuantity: (productId)=>{dispatch(subtractQuantity(productId))},
        addingOrder: orderData => dispatch(addingOrder(orderData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Booking)