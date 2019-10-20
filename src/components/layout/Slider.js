import React from 'react';
import SidebarCategories from './SidebarCategories';

function Slider(){
    return(
        <React.Fragment>
            <div class="container-fuild">
                <div class="row">
                    <div class="col-2">
                        <div class="card" style={{width: "13rem"}}>
                        <div class="card-header text-center font-weight-bolder">
                            <h5>Popular Brands</h5>
                        </div>
                            <SidebarCategories />
                        </div>
                    </div>
                    <div class="col-10">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://i.ibb.co/G7xPp9R/kingfisher.jpg" class="d-block w-100" height="346" />
                                </div>
                                <div class="carousel-item">
                                <img src="https://i.ibb.co/mbcn6YZ/carlsberg.jpg" class="d-block w-100" height="346" />
                                </div>
                                <div class="carousel-item">
                                <img src="https://i.ibb.co/nmgD9M2/jamesson.jpg" class="d-block w-100" height="346" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Slider;