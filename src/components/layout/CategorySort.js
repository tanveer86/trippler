import React from 'react';

function CategorySort() {
    return(
        <React.Fragment>
            <div class="col-3 p-2">
                <div class="col-auto my-1">
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Choose By Brands...</option>
                        <option value="1">Kingfisher</option>
                        <option value="2">Carlsberg</option>
                        <option value="3">Signature</option>
                    </select>
                </div>
            </div>
            <div class="col-3 p-2">
                <div class="col-auto my-1">
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Choose By Stores...</option>
                        <option value="1">Madhulooka</option>
                        <option value="2">Gangothri Bar</option>
                        <option value="3">Santosh Bar</option>
                    </select>
                </div>
            </div>
            <div class="col-3 p-2">
                <div class="col-auto my-1">
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Choose By Qty...</option>
                        <option value="1">200 Ml</option>
                        <option value="2">Carlsberg</option>
                        <option value="3">Signature</option>
                    </select>
                </div>
            </div>
            <div class="col-3 p-2">
                <div class="col-auto my-1">
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Sort By Price...</option>
                        <option value="1">Low - High</option>
                        <option value="2">High to Low</option>
                    </select>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CategorySort;