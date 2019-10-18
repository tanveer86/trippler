import React from 'react';
import styles from '../style.module.css'
import SearchForm from './SearchForm';

function Header(props) {
    return(
        <React.Fragment>
            <div className={styles.topHeader}>
                <div className={styles.logo}>
                    <img src="https://i.ibb.co/YQM7KJX/logo-title-dark.png" width="150" />
                </div>
                <div className={styles.searchBar}>
                    <SearchForm props={props} />
                </div>
                <div className={styles.topCart}>
                    CART
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;