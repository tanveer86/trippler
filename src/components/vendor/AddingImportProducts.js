import React from 'react';
import AddingImportProductsList from './AddingImportProductsList';
import Navbar from './Navbar';
import AddedItems from './AddedItems';
import styles from '../style.module.css'

function AddingImportProducts() {
    return(
     <div className={styles.marginTop}>
         <Navbar/>
         <div style={{float:"left",width:"50%"}}>
         <AddingImportProductsList/>
         </div>
         <div style={{float:"left"}}>
             <AddedItems/>
         </div>
     </div>
    )
}

export default AddingImportProducts;