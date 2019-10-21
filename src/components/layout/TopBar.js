import React from 'react';
import {Link} from 'react-router-dom';

let userLogin = JSON.parse(localStorage.getItem('userLogin'));

function TopBar(){

    return(
        <React.Fragment>
            <div class="container-fluid">
                <div class="row bg-primary text-white font-weight-bolder">
                    <div class="col-8">
                        <p class="mt-3">GET FREE DELIVERY ON ALL ORDERS</p>
                    </div>
                    <div class="col-4">
                        <nav class="nav">
                            <Link class="nav-link text-white mt-2" to="/user/profile">Hi, {userLogin.userName}</Link>
                            <Link class="nav-link text-white mt-2" to="/user/logout">Sign Out</Link>
                        </nav>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default TopBar;