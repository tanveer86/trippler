import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function TopBar(props){
   
    if(props.userLogin.userLogin){
        return(
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row bg-primary text-white font-weight-bolder">
                        <div class="col-8">
                            <p class="mt-3">GET FREE DELIVERY ON ALL ORDERS</p>
                        </div>
                        <div class="col-4">
                            <nav class="nav">
                                <Link class="nav-link text-white mt-2" to="/user/profile">Hi, {props.userLogin.userLogin.userName}</Link>
                                <Link class="nav-link text-white mt-2" to="/user/profile">Sign Out</Link>
                            </nav>
                        </div>
                    </div>
                </div>
    
            </React.Fragment>
        )
    }else{
        props.props.history.push('/user/register')
    }

    return(
        <React.Fragment>

        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return{
        userLogin: state.userLogin
    }
}

export default connect(mapStateToProps)(TopBar)