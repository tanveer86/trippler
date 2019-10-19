import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';
import {addingVendor} from '../../redux/actions/AllActions';

let vendorsStorage = [];
let getStorage = JSON.parse(localStorage.getItem('vendors'));

if(getStorage){
    vendorsStorage = [...getStorage]
}

class VendorRegistration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vendorId: 1,
            vendorName: '',
            vendorEmail: '',
            vendorMobile: '',
            vendorPassword: '',
            vendorArea: '',
            vendorCity: '',
            vendorPIN: '',
            vendorLicense: '',
            vendorGST: '',
            vendorLogo: '',
            vendorStatus: true,
        }
    }

    inputChange = (userInput) => {
        this.setState({[userInput.target.name]: userInput.target.value});
    }

    inputSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        this.setState({vendorId:'',vendorName:'',vendorEmail:'',vendorMobile:'',vendorPassword:'',vendorArea:'',vendorCity:'',vendorPIN:'',vendorLicense:'',vendorGST:'',vendorLogo:''})
        let newVendor = {
            vendorId: this.state.vendorId++,
            vendorName: this.state.vendorName,
            vendorEmail: this.state.vendorEmail,
            vendorMobile: this.state.vendorMobile,
            vendorPassword: this.state.vendorPassword,
            vendorArea: this.state.vendorArea,
            vendorCity: this.state.vendorCity,
            vendorPIN: this.state.vendorPIN,
            vendorLicense: this.state.vendorLicense,
            vendorGST: this.state.vendorGST,
            vendorLogo: this.state.vendorLogo,
            vendorStatus: this.state.vendorStatus
        }
        this.props.addingVendor(newVendor)
        vendorsStorage.push(newVendor)
        localStorage.setItem("vendors",JSON.stringify(vendorsStorage));
    }

    render(){
        return (
            <React.Fragment>
                <TopBar />
                <Header />
                <Nav />
                <div class="container-fluid mb-5">
                    <div class="row">
                        <div class="col-sm-9 col-md-12 col-lg-5 offset-1">
                            <div class="card p-5 mt-5 shadow">
                                <h4 class="font-weight-bold text-center">Vendor Register</h4>
                                <div class="card-body">
                                    <form onSubmit={this.inputSubmit}>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Name</label>
                                            <div class="col-sm-9">
                                                <input type="text" value={this.state.vendorName} name="vendorName" onChange={this.inputChange} class="form-control" required placeholder="Vendor Name" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Email Id</label>
                                            <div class="col-sm-9">
                                                <input type="email" value={this.state.vendorEmail} name="vendorEmail" onChange={this.inputChange} class="form-control" required placeholder="Email Id" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Mobile</label>
                                            <div class="col-sm-9">
                                                <input type="Number" value={this.state.vendorMobile} name="vendorMobile" onChange={this.inputChange} class="form-control" required placeholder="Mobile Number" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Password</label>
                                            <div class="col-sm-9">
                                                <input type="password" value={this.state.vendorPassword} name="vendorPassword" onChange={this.inputChange} class="form-control" required placeholder="Enter Password" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Area</label>
                                            <div class="col-sm-9">
                                                <input type="text" value={this.state.vendorArea} name="vendorArea" onChange={this.inputChange} class="form-control" required placeholder="Select Area" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">City</label>
                                            <div class="col-sm-9">
                                                <input type="text" value={this.state.vendorCity} name="vendorCity" onChange={this.inputChange} class="form-control" required placeholder="Enter City" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">PIN</label>
                                            <div class="col-sm-9">
                                                <input type="Number" value={this.state.vendorPIN} name="vendorPIN" onChange={this.inputChange} class="form-control" required placeholder="Enter PIN" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">License</label>
                                            <div class="col-sm-9">
                                                <input type="text" value={this.state.vendorLicense} name="vendorLicense" onChange={this.inputChange} class="form-control"  required placeholder="Enter Your License Number" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">GST</label>
                                            <div class="col-sm-9">
                                            <input type="text" vlaue={this.state.vendorGST} name="vendorGST" onChange={this.inputChange} class="form-control" required placeholder="Enter GST Number" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Upload Logo</label>
                                            <div class="col-sm-9">
                                                <input type="text" value={this.state.vendorLogo} name="vendorLogo" onChange={this.inputChange} class="form-control" required placeholder="Enter Logo URL" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2 text-center mt-3">
                                            <label class="col-sm-3 col-form-label"></label>
                                            <div class="col-sm-9">
                                                <button type="submit" class="btn btn-primary w-100">Register Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        allvendors: state.vendors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addingVendor: vendorData => dispatch(addingVendor(vendorData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorRegistration)