import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import {connect} from 'react-redux';

function User(props) {
    
    return(
        <React.Fragment>
            <TopBar/>
            <Header/>
            <Nav/>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-3 offset-1">
                        <div class="card"> 
                            <div class="text-center">
                            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" height="80" width="100" ></img>
                               <div>
                               <p>Hello, {props.userLogin.userName}</p>
                               </div>     
                            </div>
                        </div>
                        <div class="mt-3">
                                    <button class="btn btn-danger w-50">MY ORDERS</button>  
                                    <button class="btn btn-primary w-50">GO TO CART</button> 
                        </div> 
                    </div>
                    <div class="col-4 offset-1 mt-3">
                        <h1 class="font-weight-bold">Personal Details</h1>
                        <h3 class="ml-3 mt-4">Full Name: <span class="font-weight-bold">{props.userLogin.userName}</span></h3>
                        <h3 class="ml-3 mt-4">Email Id: <span class="font-weight-bold">{props.userLogin.userEmail}</span></h3>
                        <h3 class="ml-3 mt-4">Mobile: <span class="font-weight-bold">{props.userLogin.userMobile}</span></h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin.userLogin
    }
}

export default connect(mapStateToProps)(User)