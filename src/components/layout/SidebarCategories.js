import React from 'react';
import { Link } from "react-router-dom";

function SidebarCategories() {
    return (
        <React.Fragment>
            <ul class="list-group list-group-flush text-center font-weight-bolder">
                <Link to="/brand/kingfisher"><li class="list-group-item bg-danger text-white">Kingfisher</li></Link>
                <Link to="/brand/carlsberg"><li class="list-group-item bg-danger text-white">Carlsberg</li></Link>
                <Link to="/brand/blackdog"><li class="list-group-item bg-danger text-white">Black Dog</li></Link>
                <Link to="/brand/signature"><li class="list-group-item bg-danger text-white">Signature</li></Link>
                <Link to="/brand/blenders"><li class="list-group-item bg-danger text-white">Blenders Pride</li></Link>
                <Link to="/brand/royalstag"><li class="list-group-item bg-danger text-white">Royal Stag</li></Link>
            </ul>
        </React.Fragment>
    )
}

export default SidebarCategories;