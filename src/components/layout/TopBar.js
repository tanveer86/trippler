import React from 'react';
import {Link} from 'react-router-dom';

function TopBar(){
    return(
        <React.Fragment>
            <div class="container-fluid">
                <div class="row bg-primary text-white font-weight-bolder">
                    <div class="col-10">
                        <p class="mt-3">GET FREE DELIVERY ON ALL ORDERS</p>
                    </div>
                    <div class="col-2">
                        <nav class="nav">
                            <Link class="nav-link text-white mt-2" to="/user/register">Sign Up</Link>
                            <Link class="nav-link text-white mt-2" to="/user/login">Sign In</Link>
                        </nav>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default TopBar;