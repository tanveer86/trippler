import React from 'react'
import {connect} from 'react-redux';

function UserCheck(props) {

    // if(props.userLogin.userName){
    //     console.log('has user')
    // }

   
    return(
        <React.Fragment>

        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin.userLogin
    }
}

export default connect(mapStateToProps)(UserCheck)