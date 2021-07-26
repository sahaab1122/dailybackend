
// import { connect } from 'react-redux';
// import { update_user } from '../actions/authActions';
import { DELETE, LOGIN, LOGOUT, UPDATE } from '../actions/Types';


const initialState = {
    logged: false, user: {},
}

const authReducer = (state = initialState, action, info) => {
    switch (action.type) {
        case LOGIN:
            {
                return {
                    ...state,
                    logged: true, user: action.user,
                }
            }
        case UPDATE:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    user: info
                }
            }

        case LOGOUT:
            {
                // console.log(action.coin)
                return {
                    ...state, logged: false, user: {}
                }
            }




        default:
            return state;
    }




}


export default authReducer

