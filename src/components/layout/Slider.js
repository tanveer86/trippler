import React from 'react';

function Slider(){
    return(
        <React.Fragment>
            <div class="container-fuild">
                <div class="row">
                    <div class="2">
                        <div class="card" style={{width: "13rem"}}>
                        <div class="card-header text-center font-weight-bolder">
                            <h5>Popular Brands</h5>
                        </div>
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item">Kingfisher</li>
                            <li class="list-group-item">Carlsberg</li>
                            <li class="list-group-item">Black Dog</li>
                            <li class="list-group-item">Signature</li>
                            <li class="list-group-item">Blenders Pride</li>
                            <li class="list-group-item">Royal Stag</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-7">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://www.kingfisherworld.com/sites/default/files/prod-img_1.jpg" class="d-block w-100" alt="..." height="352" />
                                </div>
                                <div class="carousel-item">
                                <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/business/malaysia-sugar-tax-carlsberg-promises-no-price-hikes-for-beers-and-minimal-impact-on-other-brands/9471468-1-eng-GB/Malaysia-sugar-tax-Carlsberg-promises-no-price-hikes-for-beers-and-minimal-impact-on-other-brands_wrbm_large.jpg" class="d-block w-100" alt="..." height="352" />
                                </div>
                                <div class="carousel-item">
                                <img src="https://i.dmarge.com/2017/02/jameson002-960x580.jpg" class="d-block w-100" alt="..." height="352" />
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
                    <div class="col-3 text-right">
                        <div>
                            <img src="http://elmaliquor.com/wp-content/uploads/2016/03/irish-whiskey-Elma-Wine-Liquor-300x200.jpg" />
                        </div>
                        <div>
                            <img src="https://foodanddrink.scotsman.com/wp-content/uploads/2018/01/1A-4-300x200.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Slider;