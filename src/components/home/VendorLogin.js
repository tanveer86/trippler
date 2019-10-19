import React from 'react';

let vendorStorage = [];
let getStorage = JSON.parse(localStorage.getItem('vendors'));

if(getStorage){
    vendorStorage = [...getStorage]
}

class VendorLogin extends React.Component{
    constructor(){
        super();
        this.state = {
            email: null,
            password: null
        }
    }

    inputChange = (inputData) => {
        this.setState({[inputData.target.name]: inputData.target.value})
    }

    inputSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        let vendorSignedIn = vendorStorage.find(user => user.vendorEmail == this.state.email && user.vendorPassword == this.state.password);
        if(vendorSignedIn){
            localStorage.setItem("vendorLogin",JSON.stringify(vendorSignedIn));
            this.props.history.push('/vendor/home')
        }else{
            alert('Your Username & Password is Wrong!')
        }
    }

    render(){
        return(
            <div class="col-sm-9 col-md-12 col-lg-4 ml-4">
                <div class="card p-5 mt-5 shadow">
                    <h4 class="font-weight-bold text-center">Vendor Login</h4>
                    <div class="card-body">
                        <form onSubmit={this.inputSubmit}>
                            <div class="from-group row mb-2">
                                <label class="col-sm-3 col-form-label">Email Id</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="Enter Email address" name="email" value={this.state.email} onChange={this.inputChange} required />
                                </div>
                            </div>
                            <div class="from-group row mb-2 mt-3">
                                <label class="col-sm-3 col-form-label">Password</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.inputChange} required />
                                </div>
                            </div>
                            <div class="from-group row mb-2 mt-3">
                                <label class="col-sm-3 col-form-label"></label>
                                <div class="col-sm-8">
                                    <button type="submit" class="btn btn-primary w-100">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default VendorLogin;