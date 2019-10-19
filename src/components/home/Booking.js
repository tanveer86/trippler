import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import {connect} from 'react-redux';
import { removeItem,addQuantity,subtractQuantity} from '../../redux/actions/AllActions'
class Booking extends React.Component {
    constructor(){
        super();
        this.state = {
            userId: '',
            userName: '',
            userMobile: '',
            userDOB: '',
            userAadhar: '',
            userEmail: '',
            userPassword: '',
            userStatus: '',
            userOrderHistory: '',

        }
    }

    inputChange = (userInput) => {
        this.setState({[userInput.target.name]: userInput.target.value})
    }

    userSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        console.log(this.state)
    }

    orderInputChange = (orderInput) => {
        console.log(orderInput.target.orderArea)
    }

    orderInputSubmit = (orderSubmit) => {
        orderSubmit.preventDefault();
        console.log(orderSubmit)
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
                <div class="card-body">
                <div class="row">
                    <div class="col-4 text-center" key={eachProduct.productId}>
                        <img src={eachProduct.productImage} height="150"/>
                        <h4 class="mt-2">{eachProduct.productName}</h4>
                        <p class="font-weight-bolder">{eachProduct.productSellingPrice}</p>
                        <div class="float-left ml-2"><img src="https://img.icons8.com/cotton/2x/minus--v2.png" width="40" height="40" onClick={()=>{this.handleSubtractQuantity(eachProduct.productId)}}></img></div>
                        <p class="float-left">Quantity: {eachProduct.quantity}</p>
                        <div class="float-left "><img src="https://img.icons8.com/cotton/2x/plus--v2.png" width="40" height="40" onClick={()=>{this.handleAddQuantity(eachProduct.productId)}}></img></div>
                        <div class="float-left "><img src="https://cdn6.aptoide.com/imgs/6/7/b/67bacc637d58c80da40a5c2ec6d6f74d_icon.png?w=240" onClick={()=>{this.handleRemove(eachProduct.productId)}} width="40" height="30"></img></div>
                    </div>
                </div>
            </div>
            )
        })
        return(
            <React.Fragment>
                <TopBar />
                <Header />
                <Nav />
                <div class="container mt-5">
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
    
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                {showCartProducts}
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
                                <div class="card-body">
                                    <form onSubmit={this.userSubmit}>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Your Name</label>
                                                <input type="text" class="form-control" placeholder="Your Name" value={this.state.userName} name="userName" onChange={this.inputChange} required />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Mobile Number</label>
                                                <input type="number" class="form-control" placeholder="Your Mobile Number" value={this.state.userMobile} name="userMobile" onChange={this.inputChange} required/>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Your Date of Birth</label>
                                                <input type="text" class="form-control" placeholder="Your Date of Birth" value={this.state.userDOB} name="userDOB" onChange={this.inputChange} required/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Aadhar Number</label>
                                                <input type="number" class="form-control" placeholder="Your Aadhar Number" value={this.state.userAadhar} name="userAadhar" onChange={this.inputChange} required/>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Email</label>
                                                <input type="email" class="form-control" placeholder="Email" value={this.state.userEmail} name="userEmail" onChange={this.inputChange} required />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Password" value={this.state.userPassword} name="userPassword" onChange={this.inputChange} required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                <label class="form-check-label">
                                                    I agree to the Trippler's terms and conditions.
                                                </label>
                                            </div>
                                        </div>
                                        <button class="btn btn-link btn-primary text-white" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Register & Continue</button>
                                    </form>
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
                                            <input type="text" class="form-control" placeholder="1234 Main St" value={this.state.orderAddress} name="orderAddress"  />
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label>City</label>
                                                <select class="form-control" value={this.state.orderCity} name="orderCity" >
                                                    <option selected>Bangalore</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Area</label>
                                                <select class="form-control" value={this.state.orderArea} name="orderArea" >
                                                    <option selected>Choose...</option>
                                                    <option>Kormangala</option>
                                                    <option>Jayanagar</option>
                                                    <option>BTM Layout</option>
                                                    <option>JP Nagar</option>
                                                </select>
                                            </div>
                                            <div class="form-roup col-md-2">
                                                <label>Pin Code</label>
                                                <input type="text" class="form-control" name="orderPinCode" value={this.state.orderPinCode}  />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" />
                                                <label class="form-check-label">
                                                    I agree to the Trippler's terms and conditions.
                                                </label>
                                            </div>
                                        </div>
                                        <button class="btn btn-link btn-primary text-white" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Continue</button>
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
        subtractQuantity: (productId)=>{dispatch(subtractQuantity(productId))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Booking)