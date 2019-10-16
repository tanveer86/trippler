import React from 'react';
import styles from '../style.module.css'

function Nav() {
    return(
        <React.Fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 bg-danger font-weight-bolder p-2">
                        <nav class="nav">
                            <a class="nav-link active text-white" href="#">Beer</a>
                            <a class="nav-link text-white" href="#">Wine</a>
                            <a class="nav-link text-white" href="#">Taquila</a>
                            <a class="nav-link text-white" href="#">Rum</a>
                            <a class="nav-link text-white" href="#">Vodika</a>
                            <a class="nav-link text-white" href="#">Wiskey</a>
                            <a class="nav-link text-white" href="#">Gin</a>
                            <a class="nav-link text-white" href="#">Brandy</a>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav;