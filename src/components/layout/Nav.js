import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <React.Fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 bg-danger font-weight-bolder p-2">
                        <nav class="nav">
                            <Link class="nav-link active text-white" to="/beer">Beer</Link>
                            <Link class="nav-link text-white" to="/whiskey">Whiskey</Link>
                            <Link class="nav-link text-white" to="/wine">Wine</Link>
                            <Link class="nav-link text-white" to="/taquila">Taquila</Link>
                            <Link class="nav-link text-white" to="/rum">Rum</Link>
                            <Link class="nav-link text-white" to="/vodika">Vodika</Link>
                            <Link class="nav-link text-white" to="/gin">Gin</Link>
                            <Link class="nav-link text-white" to="/brandy">Brandy</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav;