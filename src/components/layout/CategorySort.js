import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
let list;
class CategorySort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.products.products,
        }
    }
    inputBrand = (userInput) => {
        userInput.preventDefault();
        let x = this.props.products.products.filter(element => element.productBrand == userInput.target.value);
        this.setState({ list: x })
    }
    inputStore = (userInput) => {
        userInput.preventDefault();
        console.log(this.props.vendors.vendors.length)
    }
    inputVolume = (userInput) => {
        userInput.preventDefault();
        let x = this.props.products.products.filter(element => element.productVolume == userInput.target.value);
        this.setState({ list: x })
    }
    inputSortOrder = (userInput) => {
        userInput.preventDefault();
        if (userInput.target.value === "h2l") {
            let x = this.props.products.products.sort((a, b) => (Number(b.productMRP)) - (Number(a.productMRP)));
            this.setState({ list: x })
        }
        else if (userInput.target.value === "l2h") {
            let x = this.props.products.products.sort((a, b) => (Number(a.productMRP)) + - (Number(b.productMRP)));
            this.setState({ list: x })
        }
    }
    render() {
        let vendorList = this.props.vendors.vendors.map(items => {
            return (
                <option value={items.vendorName}>{items.vendorName}</option>
            )
        })

        list = this.state.list.map(eachProduct => {
            return (
                <div class="col-3 font-weight-bolder text-center">
                    <div class="card">
                        <img src={eachProduct.productImage} class="card-img-top" alt={eachProduct.productName} title={eachProduct.productName} height="250" />
                        <div class="card-body">
                            <h5 class="card-title">{eachProduct.productName}</h5>
                            <p class="card-text text-danger">MRP: Rs. {eachProduct.productMRP}</p>
                            <p class="card-text text-danger">Rs. {eachProduct.productSellingPrice}</p>
                            <Link to={`product/${eachProduct.productName}`} class="btn btn-danger font-weight-bolder">View Detail</Link>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <React.Fragment>
                <div class="col-3 p-2 float-left">
                    <div class="col-auto my-1">
                        <select name="sortByBrand" value={this.state.sortByBrand} class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.inputBrand}>
                            <option selected>Choose By Brands...</option>
                            <option value="kingfisher">Kingfisher</option>
                            <option value="carlsberg">Carlsberg</option>
                            <option value="signature">Signature</option>
                        </select>
                    </div>
                </div>
                <div class="col-3 p-2 float-left">
                    <div class="col-auto my-1">
                        <select name="sortByStores" value={this.state.sortByStores} class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.inputStore}>
                            <option selected>Choose By Stores...</option>
                            {vendorList}
                        </select>
                    </div>
                </div>
                <div class="col-3 p-2 float-left">
                    <div class="col-auto my-1">
                        <select name="sortByVolume" value={this.state.sortByVolume} class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.inputVolume}>
                            <option selected>Choose By Volume...</option>
                            <option value="180ml">180 mL</option>
                            <option value="375ml">375 mL</option>
                            <option value="750ml">750 mL</option>
                        </select>
                    </div>
                </div>
                <div class="col-3 p-2 float-left">
                    <div class="col-auto my-1">
                        <select name="sortByPrice" value={this.state.sortByPrice} class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.inputSortOrder}>
                            <option selected>Sort By Price...</option>
                            <option value="l2h">Low to High</option>
                            <option value="h2l">High to Low</option>
                        </select>

                    </div>
                </div>
                <div class="container-fuild bg-light">
                    <div class="row">
                        {list}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        vendors: state.vendors
    }
}
export default connect(mapStateToProps, null)(CategorySort)