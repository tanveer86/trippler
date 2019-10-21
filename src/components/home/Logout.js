import React from 'react'

let userLogin = JSON.parse(localStorage.getItem('userLogin'));

function Logout() {

    if(userLogin){
        localStorage.removeItem('userLogin');
        this.props.history.push('/user/register');
    }

    return(
        <React.Fragment>
            this is from lout out
        </React.Fragment>
    )
}

export default Logout;