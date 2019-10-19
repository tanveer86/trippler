const USER_ADDED = "USER_ADDED";

let getStorage = JSON.parse(localStorage.getItem('users'));
let usersLocalStorage = []

if(getStorage){
    usersLocalStorage = [...getStorage]
}

const initState = {
    users: [...usersLocalStorage]
}

export default (state = initState, action) => {
    switch(action.type){
        case USER_ADDED:
            let addingUser = {
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
                users: [...state.users, addingUser]
            }
        default:
            return state;
    }
}