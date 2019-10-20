import React from 'react'
import CategorySort from '../layout/CategorySort'
import TopBar from '../layout/TopBar'
import Header from '../layout/Header'
import Nav from '../layout/Nav'
function AllProducts() {
    return(
        <React.Fragment>
            <TopBar/>
            <Header/>
            <Nav/>
            <CategorySort/>
        </React.Fragment>
    )
}
export default AllProducts;