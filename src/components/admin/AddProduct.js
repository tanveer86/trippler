import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
function AddProduct() {
    return(
        <React.Fragment>
            
            <div className="container-fluid">
               <div className="col-sm-9 col-md-12 col-lg-5 mx-auto ">
                   <div className="card p-5 mt-5 shadow">
                      <p className="font-weight-bold text-center">Add Product</p>
                         <div className="card-body">
                             <form>
                                 <div className="from-group row mb-2">
                                     <label for="productname" className="col-sm-3 col-form-label">Product Name</label>
                                     <div className="col-sm-9">
                                        <input type="text" className="form-control" placeholder="Product Name"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-3">
                                     <label for="productname" className="col-sm-3 col-form-label">Product Image</label>
                                     <div className="col-sm-8 ml-3">
                                        <input type="file" class="custom-file-input" id="validatedCustomFile" required/>
                                        <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="category" className="col-sm-3 col-form-label">Category</label>
                                     <div className="col-sm-9">
                                         <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Choose..</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                         </select>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="brandname" className="col-sm-3 col-form-label">Brand Name</label>
                                     <div className="col-sm-9">
                                         <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Choose..</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                         </select>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="price" className="col-sm-3 col-form-label">Price</label>
                                     <div className="col-sm-9">
                                        <input type="Number" className="form-control" placeholder="Price"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="volumn" className="col-sm-3 col-form-label">volumn</label>
                                     <div className="col-sm-9">
                                         <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Choose..</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                         </select>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="alcohalcontent" className="col-sm-3 col-form-label">Alcohal Content</label>
                                     <div className="col-sm-9">
                                        <input type="Number" className="form-control" placeholder="Alcohal Content"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="mfd" className="col-sm-3 col-form-label">Manufacture Date</label>
                                     <div className="col-sm-9">
                                        <input type="date" className="form-control" placeholder="Alcohal Content"/>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="alcohalcontent" className="col-sm-3 col-form-label">Description</label>
                                     <div className="col-sm-9">
                                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                     </div>
                                 </div>
                                 <div className="from-group row mb-2">
                                     <label for="alcohalcontent" className="col-sm-3 col-form-label"></label>
                                     <div className="col-sm-9">
                                     <button type="button" class="btn btn-primary btn-lg btn-block">ADD</button>
                                     </div>
                                 </div>
                             </form>

                         </div>

                   </div>
               </div>
            </div>
           
        </React.Fragment>
    )
}

export default AddProduct;