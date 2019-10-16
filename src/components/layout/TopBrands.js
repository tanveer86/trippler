import React from 'react';

function TopBrands(){
    return(
        <React.Fragment>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-3">
                        <img class="rounded" src="https://i.pinimg.com/originals/2a/49/bc/2a49bc485fdbce4e86ba9d99c9006b5b.png" width="200"/>
                    </div>
                    <div class="col-3">
                        <img class="rounded-circle" src="http://www.loyaltyandcharitycup.com/wp-content/uploads/2019/07/logo-00.png" width="200" />
                    </div>
                    <div class="col-3">
                        <img src="http://logo-load.com/uploads/posts/2016-03/1458539359_pilsen-callao-logo.png" width="200" />
                    </div>
                    <div class="col-3">
                        <img src="https://logonoid.com/images/victoria-bitter-logo.png" width="200" height="180" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TopBrands;