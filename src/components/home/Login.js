import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
function Login() {
    return (
        //this is from Login page
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div class="container-fulid">
                <div class="row mt-5">
                    <div class="col-sm-9 col-md-12 col-lg-5 mx-auto shadow">
                        <div class="card p-4">
                            <p class="font-weight-bold text-center"> Log In</p>
                            <div class="card-body">
                                <form>
                                    <div class="form-group row">
                                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-5">
                                        </div>
                                        <button class="btn btn-lg btn-primary ">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <p class="text-center font-weight-bold">
                            New Memeber
                          <button class="btn btn-danger btn-lg ml-2">Register Now</button>
                        </p>

                    </div>
                </div>

            </div>
        </React.Fragment>

    )
}

export default Login;