import React from 'react';
import AddingImportProductsList from './AddingImportProductsList';
import Navbar from './Navbar';
import AddedItems from './AddedItems';

function AddingImportProducts() {
    return(
     <div style={{marginTop:"150px"}}>
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