const VENDOR_ADDED = "VENDOR_ADDED";

let getStorage = JSON.parse(localStorage.getItem('vendors'));
let vendorsLocalStorage = []

if(getStorage){
    vendorsLocalStorage = [...getStorage]
}

const initState = {
    vendors: [...vendorsLocalStorage]
}

export default (state = initState, action) => {
    switch(action.type){
        case VENDOR_ADDED:
                let addingVendor = {
                    vendorId: action.vendorId,
                    vendorName: action.vendorName,
                    vendorEmail: action.vendorEmail,
                    vendorMobile: action.vendorMobile,
                    vendorPassword: action.vendorPassword,
                    vendorArea: action.vendorArea,
                    vendorCity: action.vendorCity,
                    vendorPIN: action.vendorPIN,
                    vendorLicense: action.vendorLicense,
                    vendorGST: action.vendorGST,
                    vendorLogo: action.vendorLogo,
                    vendorStatus: action.vendorStatus,
                    productVendor: action.productVendor
                };
            return {
                ...state,
                vendors: [...state.vendors, addingVendor]
            }
        default:
            return state;
    }
}