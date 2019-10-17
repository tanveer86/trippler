import React from 'react';

class AddProduct extends React.Component {
    constructor(){
        super()
        this.state = {
            productId: '',
            productName: '',
            productImage: '',
            productCategory: '',
            productBrand: '',
            productPrice: '',
            productVolume: '',
            productAlcohalContent: '',
            productExpiry: '',
            productDescription: '',
            productStatus: true
        }
    }

    inputChange = (userInput) => {
        this.setState({[userInput.target.name]: userInput.target.value});
    }

    inputSubmit = (userSubmited) => {
        userSubmited.preventDefault();
        this.setState({productName:'',productImage:'',productCategory:'',productBrand:'',productPrice:'',productVolume:'',productAlcohalContent:'',productExpiry:'',productDescription:''})
        console.log(this.state)
    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                   <div className="col-sm-9 col-md-12 col-lg-5 mx-auto ">
                       <div className="card p-5 mt-5 shadow">
                          <p className="font-weight-bold text-center">Add Product</p>
                             <div className="card-body">
                                 <form onSubmit={this.inputSubmit}>
                                     <div className="from-group row mb-2">
                                         <label className="col-sm-3 col-form-label">Product Name</label>
                                         <div className="col-sm-9">
                                            <input name="productName" value={this.state.productName} type="text" className="form-control" placeholder="Product Name" required onChange={this.inputChange} />
                                         </div>
                                     </div>
                                     <div className="from-group row mb-2">
                                         <label className="col-sm-3 col-form-label">Product Image</label>
                                         <div className="col-sm-9">
                                            <input name="productImage" value={this.state.productImage} type="text" className="form-control" placeholder="Product Image" required onChange={this.inputChange} />
                                         </div>
                                     </div>
                                     <div className="from-group row mb-2">
                                         <label className="col-sm-3 col-form-label">Category</label>
                                         <div className="col-sm-9">
                                             <select name="productCategory" value={this.state.productCategory} class="form-control" onChange={this.inputChange}>
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
                                         <label className="col-sm-3 col-form-label">Brand Name</label>
                                         <div className="col-sm-9">
                                             <select name="productBrand" value={this.state.productBrand} class="form-control" onChange={this.inputChange}>
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
                                         <label className="col-sm-3 col-form-label">Price</label>
                                         <div className="col-sm-9">
                                            <input name="productPrice" value={this.state.productPrice} type="number" className="form-control" placeholder="Price" required onChange={this.inputChange} />
                                         </div>
                                     </div>
                                     <div className="from-group row mb-2">
                                         <label className="col-sm-3 col-form-label">Volume</label>
                                         <div className="col-sm-9">
                                             <select name="productVolume" value={this.state.productVolume} class="form-control" onChange={this.inputChange}>
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
                                         <label className="col-sm-3 col-form-label">Alcohal Content</label>
                                         <div className="col-sm-9">
                                            <input name="productAlcohalContent" value={this.state.productAlcohalContent} type="number" className="form-control" placeholder="Alcohal Content" required onChange={this.inputChange} />
                                         </div>
                                     </div>
                                     <div className="from-group row mb-2">
                                         <label className="col-sm-3 col-form-label">Manufacture Date</label>
                                         <div className="col-sm-9">
                                            <input name="productExpiry" value={this.state.productExpiry} type="date" className="form-control" placeholder="Alcohal Content" required onChange={this.inputChange} />
                                         </div>
                                     </div>
                                     <div className="from-group row mb-2">
                                         <label className="col-sm-3 col-form-label">Description</label>
                                         <div className="col-sm-9">
                                         <textarea name="productDescription" value={this.state.productDescription} class="form-control" rows="3" onChange={this.inputChange}></textarea>
                                         </div>
                                     </div>
                                     <div className="from-group row mb-2">
                                         <label className="col-sm-3 col-form-label"></label>
                                         <div className="col-sm-9">
                                         <button type="submit" class="btn btn-primary btn-lg btn-block">ADD PRODUCT</button>
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
}

export default AddProduct;