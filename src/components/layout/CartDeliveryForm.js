import React from 'react'

class CartDeliveryForm extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.orderInputSubmit}>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" placeholder="1234 Main St" value={this.state.orderAddress} name="orderAddress"  />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label>City</label>
                            <select class="form-control" value={this.state.orderCity} name="orderCity" >
                                <option selected>Bangalore</option>
                            </select>
                        </div>
                    <div class="form-group col-md-6">
                        <label>Area</label>
                        <input type="text" class="form-control" placeholder="Your Area" value={this.state.orderArea} name="orderArea"  />
                    </div>
                    <div class="form-roup col-md-2">
                        <label>Pin Code</label>
                        <input type="text" class="form-control" name="orderPinCode" value={this.state.orderPinCode}  />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input checked class="form-check-input" type="checkbox" />
                            <label class="form-check-label">
                                I agree to the Trippler's terms and conditions.
                            </label>
                    </div>
                </div>
                <button class="btn btn-danger text-white" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Continue</button>
                </form>
            </React.Fragment>
        )
    }
}

export default CartDeliveryForm;