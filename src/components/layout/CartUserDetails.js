import React from 'react';

let userLogin = JSON.parse(localStorage.getItem('userLogin'));

function CartUserDetails() {
    if(userLogin){
        return(
            <React.Fragment>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title text-center font-weight-bolder">Your Account Details</h5>
                        <div class="row p-3">
                            <div class="col-6">
                                <p class="card-text text-left">Your Name: {userLogin.userName}</p>
                            </div>
                            <div class="col-6 text-right">
                                <p class="card-text">Your Mobile: {userLogin.userMobile}</p>
                            </div>
                            <div class="col-6">
                                <p class="card-text text-left">Your Date of Birth: {userLogin.userDOB}</p>
                            </div>
                            <div class="col-6">
                                <p class="card-text text-right">Your Email: {userLogin.userEmail}</p>
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

export default CartUserDetails;