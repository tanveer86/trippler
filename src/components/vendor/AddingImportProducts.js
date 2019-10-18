import React from 'react';
import AddingImportProductsList from './AddingImportProductsList';
import Navbar from './Navbar';
import AddedItems from './AddedItems';
import styles from '../style.module.css'

let getStorage = JSON.parse(localStorage.getItem('products'));

class AddingImportProducts extends React.Component {
    constructor(){
        super();
        this.state = {
            vendorName: 'Tanveer',
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
            localStorage.setItem("products",JSON.stringify(getStorage));
            console.log(getStorage)
        }
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.inputSubmit}>
                    <div class="form-group">
                        <label>Enter your discount on mrp</label>
                        <input type="number" class="form-control" placeholder="Enter discount in %" name="discountPercentage" value={this.state.discountPercentage} onChange={this.inputChange} required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group form-check">
                        <input checked type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Import all the products for sale</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
    
        )
    }
}

export default AddingImportProducts;