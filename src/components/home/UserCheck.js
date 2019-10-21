import React from 'react'

let userLogin = JSON.parse(localStorage.getItem('userLogin'));

function UserCheck(props) {

    // if(!userLogin){
    //     this.props.history.push('/user/register')
    // }

    console.log(props)
    return(
        <React.Fragment>

        </React.Fragment>
    )
}

export default UserCheck;