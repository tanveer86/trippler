import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';
import {addingUser} from '../../redux/actions/AllActions';

let usersStorage = [];
let getStorage = JSON.parse(localStorage.getItem('users'));

if(getStorage){
    usersStorage = [...getStorage]
}

class Register extends React.Component {
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
        this.props.history.push('/user/profile')
        // console.log(this.state)
    }

    render(){
        return (
            <React.Fragment>
                <TopBar />
                <Header />
                <Nav />
                <div class="container-fluid mb-5">
                    <div class="col-sm-9 col-md-12 col-lg-4 mx-auto ">
                        <div class="card p-5 mt-5 shadow">
                            <h5 class="font-weight-bold text-center">User Register</h5>
                            <div class="card-body">
                                <form onSubmit={this.inputSubmit}>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Full Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" value={this.state.userName} name="userName" class="form-control" required placeholder="Full Name" onChange={this.inputChange} />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Date of Birth</label>
                                        <div class="col-sm-9">
                                            <input type="date" value={this.state.userDOB} name="userDOB" class="form-control" required placeholder="Alcohal Content" onChange={this.inputChange} />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Email Id</label>
                                        <div class="col-sm-9">
                                            <input type="email" value={this.state.userEmail} name="userEmail" class="form-control"  placeholder="Email Id" required onChange={this.inputChange}/>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Mobile</label>
                                        <div class="col-sm-9">
                                            <input type="Number" value={this.state.userMobile} name="userMobile" class="form-control" required placeholder="Mobile Number" onChange={this.inputChange} />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Password</label>
                                        <div class="col-sm-9">
                                            <input type="password" value={this.state.userPassword} name="userPassword" class="form-control" required placeholder="Enter Password" onChange={this.inputChange}/>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Aadhar</label>
                                        <div class="col-sm-9">
                                            <input type="Number" value={this.state.userAadhar} name="userAadhar" class="form-control" required placeholder="Aadhar Number" onChange={this.inputChange}/>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2 text-center mt-3">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-primary w-100">Register Now Here</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addingUser: userData => (dispatch(addingUser(userData)))

    }
}

export default connect(null, mapDispatchToProps)(Register)