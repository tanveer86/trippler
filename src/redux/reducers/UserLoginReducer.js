const USER_LOGIN = "USER_LOGIN";

let getStorage = JSON.parse(localStorage.getItem('userLogin'));
// let usersLoginLocalStorage = []

// if(getStorage){
//     usersLoginLocalStorage = [getStorage]
// }

const initState = {
    userLogin: getStorage
}

export default (state = initState, action) => {
    switch(action.type){
        case USER_LOGIN:
            let loggedUser = {
                userId: action.userId,
                userName: action.userName,
                userDOB: action.userDOB,
                userEmail: action.userEmail,
                userMobile: action.userMobile,
                userPassword: action.userPassword,
                userAadhar: action.userAadhar,
                userStatus: action.userStatus,
                userOrderHistory: action.userOrderHistory
            }
            return {
                ...state,
                userLogin: loggedUser
            }
        default:
            return state;
    }
}