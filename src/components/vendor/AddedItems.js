import React from 'react'

function AddedItems() {
  return (
    <div>
      <div style={{ width: "450px", background: "#BF4077", height: "600px" }}>
        <h3 class="font-weight-bold text-white text-center mb-3">ADDED ITEMS</h3>
        <p class="float-left ml-5">1.Kingfisher Strong</p>
        <p class="float-right mr-5"> MRP: ₹ 800</p>
        <p class="clear-both float-left ml-5">2.Tuborg STRONG PREMIUM</p>
        <p class="float-right mr-5"> MRP: ₹ 400</p>
        <input class="offset-3 mb-3" placeholder="Decrease Price by X" style={{ marginTop: "300px" }} /> % <br></br>
        <button class="btn btn-secondary offset-4">UPDATE ITEMS</button>
      </div>
    </div>
  )
}
export default AddedItems;
