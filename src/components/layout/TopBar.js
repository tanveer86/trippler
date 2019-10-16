import React from 'react';

function TopBar(){
    return(
        <React.Fragment>
            <div class="container-fluid">
                <div class="row bg-primary text-white">
                    <div class="col-4 text-left">
                        <p>Some Offer will come here in text</p>
                    </div>
                    <div class="col-8 text-right">
                        <a class="text-white" href="/">Sign Up</a>
                        <a class="text-white" href="/">Sign In</a>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default TopBar;