import React from 'react';
import styles from '../style.module.css'
import SearchForm from './SearchForm';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
render () {
    let cartLength=this.props.addToCart.addedItems.length;
    //console.log(this.props.addToCart.addedItems.length)
    return(
        <React.Fragment>   
            <div className={styles.topHeader}>
                <div className={styles.logo}>
                    <Link to="/"><img src="https://i.ibb.co/YQM7KJX/logo-title-dark.png" width="150" /></Link>
                </div>
                <div className={styles.searchBar}>
                    <SearchForm props={this.props} />
                </div>
                <div className={styles.topCart}>
                  <Link to="/booking/cart"><img src="https://images.vexels.com/media/users/3/132104/isolated/preview/5f2ebb95984bf47ea01319291eb81f68-shopping-cart-silhouette-icon-by-vexels.png" width="40" height="40"></img><span class="font-weight-bold">{cartLength}</span></Link>
                </div>
            </div>
        </React.Fragment>
    )
}
    
}
const mapStateToProps = (state) => {
    return {
        allProducts: state.products,
        addToCart: state.addedToCart,
    }
}

export default connect(mapStateToProps)(Header)