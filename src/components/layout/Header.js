import React from 'react';
import styles from '../style.module.css'

function Header() {
    return(
        <React.Fragment>
            <div className={styles.topHeader}>
                <div className={styles.logo}>
                    <img src="https://i.ibb.co/YQM7KJX/logo-title-dark.png" width="150" />
                </div>
                <div className={styles.searchBar}>
                    <form>
                        <input className={styles.searchInput} type="text" placeholder="Search for any product" required />
                        <button className={styles.searchButton}>SEARCH NOW</button>
                    </form>
                </div>
                <div className={styles.topCart}>
                    CART
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;