import {  SET_USERS, SET_ITEMS, SET_PRIZES, SET_ORDERS, SET_TICKETS } from '../actions/Types'

const initialState = {
    prizes: [], items: [], 
    favourites: [], users: [], 
    orders: [],tickets: [],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

       
        
        // case SET_FAVOURITE: {
        //     return {
        //         ...state,
        //         favourites: action.payload,
        //     }
        // }
        // case SET_FEATURED: {
        //     return {
        //         ...state,
        //         featured: action.payload,
        //     }
        // }
        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }
        case SET_TICKETS: {
            return {
                ...state,
                tickets: action.payload,
            }
        }
        case SET_ITEMS: {
            return {
                ...state,
                items: action.payload,
            }
        }
        case SET_PRIZES: {
            return {
                ...state,
                prizes: action.payload,
            }
        }
        
        // case SET_COUPON: {
        //     return {
        //         ...state,
        //         coupons: action.payload,
        //     }
        // }
        case SET_ORDERS: {
            return {
                ...state,
                orders: action.payload,
            }
        }
        // case SET_TRANSACTIONS: {
        //     return {
        //         ...state,
        //         transactions: action.payload,
        //     }
        // }

        default:
            return state;

    }

}
export default appReducer