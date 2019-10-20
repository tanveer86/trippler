import React from 'react';
import {connect} from 'react-redux';
import {addingUser} from '../../redux/actions/AllActions';

let usersStorage = [];
let getStorage = JSON.parse(localStorage.getItem('users'));

let userLogin = JSON.parse(localStorage.getItem('userLogin'));

if(getStorage){
    usersStorage = [...getStorage]
}

class CartRegister extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userId: 1,
            userName: '',
            userDOB: '',
            userEmail: '',
            userMobile: '',
            userPassword: '',
            userAadhar: '',
            userStatus: true,
            userOrderHistory: []
        }
    }

    inputChange = (userInput) => {
        this.setState({[userInput.target.name]:userInput.target.value})
    }

    inputSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        let newUser = {
            userId: this.state.userId++,
            userName: this.state.userName,
            userDOB: this.state.userDOB,
            userEmail: this.state.userEmail,
            userMobile: this.state.userMobile,
            userPassword: this.state.userPassword,
            userAadhar: this.state.userAadhar,
            userStatus: this.state.userStatus,
            userOrderHistory: this.state.userOrderHistory
        }
        this.props.addingUser(newUser);
        usersStorage.push(newUser);
        localStorage.setItem("users",JSON.stringify(usersStorage));
        localStorage.setItem("userLogin",JSON.stringify(this.state));
        console.log(this.state)
    }

    render(){

        if(!userLogin){
            return(
                <React.Fragment>
                    <form onSubmit={this.inputSubmit}>
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
                                <input type="date" class="form-control" placeholder="Your Date of Birth" value={this.state.userDOB} name="userDOB" onChange={this.inputChange} required/>
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
                                <input checked class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label">
                                    I agree to the Trippler's terms and conditions.
                                </label>
                            </div>
                        </div>
                            <button class="btn btn-primary text-white" type="submit" >Create My Account</button>
                    </form>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>

                </React.Fragment>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addingUser: userData => (dispatch(addingUser(userData)))
    }
}

export default connect(null, mapDispatchToProps)(CartRegister)