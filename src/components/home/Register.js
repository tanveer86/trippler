import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';

function Register() {
    return(
        <React.Fragment>
            <TopBar/>
            <Header/>
            <Nav/>
            <div className="container-fluid mb-5">
               <div className="col-sm-9 col-md-12 col-lg-4 mx-auto ">
                   <div className="card p-5 mt-5 shadow">
                      <h5 className="font-weight-bold text-center">User Register</h5>
                         <div className="card-body">
                             <form>
                                 <div className="from-group row mb-2">
                                     <label for="fullName" className="col-sm-3 col-form-label">Full Name</label>
                                     <div className="col-sm-9">
                                        <input type="text" className="form-control" required placeholder="Full Name"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="dateOfBirth" className="col-sm-3 col-form-label">Date of Birth</label>
                                     <div className="col-sm-9">
                                        <input type="date" className="form-control" required placeholder="Alcohal Content"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="emailId" className="col-sm-3 col-form-label">Email Id</label>
                                     <div className="col-sm-9">
                                        <input type="email" className="form-control" required placeholder="Email Id"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="mobile" className="col-sm-3 col-form-label">Mobile</label>
                                     <div className="col-sm-9">
                                        <input type="Number" className="form-control" required placeholder="Mobile Number"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="password" className="col-sm-3 col-form-label">Password</label>
                                     <div className="col-sm-9">
                                        <input type="password" className="form-control" required placeholder="Enter Password"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="aadhar" className="col-sm-3 col-form-label">Aadhar</label>
                                     <div className="col-sm-9">
                                        <input type="Number" className="form-control" required placeholder="Aadhar Number"/>
                                     </div>
                                 </div>
                                
                                 <div className="from-group row mb-2 text-center mt-3">
                                     <label for="alcohalcontent" className="col-sm-3 col-form-label"></label>
                                     <div className="col-sm-9">
                                     <button type="button" class="btn btn-primary w-100">Register</button>
                                     </div>
                                 </div>
                             </form>
                         </div>
                   </div>
               </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Register;