import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import CategorySort from '../layout/CategorySort';
import CategoryProductList from '../layout/CategoryProductList';
import TopBrands from '../layout/TopBrands';
import Footer from '../layout/Footer';

function Category() {
    return(
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div class="container-fuild">
                <div class="row"> 
                    <div class="col-12">
                        <img src="http://www.supergeona.com/wp-content/uploads/2016/12/drinks-1-1300x300.jpg" class="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
            <div class="container-fuild bg-light">
                <div class="row">
                    <CategorySort />
                    <CategoryProductList />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Category;