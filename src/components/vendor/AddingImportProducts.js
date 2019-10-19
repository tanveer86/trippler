import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux'
var arr=[];
let getStorage = JSON.parse(localStorage.getItem('products'));

let getVendor = JSON.parse(localStorage.getItem('vendorLogin'));

class AddingImportProducts extends React.Component {
    constructor(){
        super();
        this.state = {
            vendorName: getVendor.vendorName,
            discountPercentage: null
        }
    }

    inputChange = (userInput) => {
        this.setState({discountPercentage: userInput.target.value})
    }
 
    inputSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        for(var i = 0; i < getStorage.length; i++){
            getStorage[i].productVendor.push(this.state)
            
            //amit helped to calculate this
            // let lowestPrice = getStorage[i].productMRP - (getStorage[i].productMRP*this.state.discountPercentage*0.01)
            // getStorage[i].productSellingPrice = lowestPrice;
            // localStorage.setItem("products",JSON.stringify(getStorage));
            for(var t = 0; t < getStorage[i].productVendor.length; t++)
            {
                arr.push(getStorage[i].productVendor[t].discountPercentage)
            
            }
        }
        arr.map(a=>Number(a));
        var maxDis=Math.max(...arr)
        for(var i = 0; i < getStorage.length; i++){
            // getStorage[i].productVendor.push(this.state)
            
            //amit helped to calculate this
            let lowestPrice = getStorage[i].productMRP - (getStorage[i].productMRP*maxDis*0.01)
            getStorage[i].productSellingPrice = lowestPrice;
            localStorage.setItem("products",JSON.stringify(getStorage));
        }
    }

    render(){
        return(
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-8 mt-5">
                            <form onSubmit={this.inputSubmit}>
                                <div class="form-group text-center">
                                    <label>Enter the Discount You Want to Sell in Percentage "%"</label>
                                    <input type="number" class="form-control" placeholder="Enter discount in %" name="discountPercentage" value={this.state.discountPercentage} onChange={this.inputChange} required/>
                                    <small id="emailHelp" class="form-text text-muted">Offer the Best Price to Get More Sales</small>
                                </div>
                                <div class="form-group form-check">
                                    <input checked type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Import all the Products for Sale</label>
                                </div>
                                <button type="submit" class="btn btn-danger">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToState = (dispatch) => {
    return {

    }
}

export default connect(null, mapDispatchToState)(AddingImportProducts)