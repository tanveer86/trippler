import React from 'react';
import {connect} from 'react-redux';

function CartUserDetails(props) {
    if(props.userLogin){
        return(
            <React.Fragment>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title text-center font-weight-bolder">Your Account Details</h5>
                        <div class="row p-3">
                            <div class="col-6">
                                <p class="card-text text-left">Your Name: {props.userLogin.userName}</p>
                            </div>
                            <div class="col-6 text-right">
                                <p class="card-text">Your Mobile: {props.userLogin.userMobile}</p>
                            </div>
                            <div class="col-6">
                                <p class="card-text text-left">Your Date of Birth: {props.userLogin.userDOB}</p>
                            </div>
                            <div class="col-6">
                                <p class="card-text text-right">Your Email: {props.userLogin.userEmail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>

            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        userLogin: state.userLogin.userLogin
    }
}
 
export default connect(mapStateToProps)(CartUserDetails)