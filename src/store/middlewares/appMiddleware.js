
// import { setError, setLoading } from '../actions/globalActions'
import api from '../../api/api';
import path from '../../api/path';
import { set_items, set_prizes, set_favourite, set_featured, set_user, set_coupon, set_orders, set_transactions, set_ticket } from '../actions/appAction'


export const _getFeatured = () => {

    return async (dispatch, getState) => {

        let res = await api.getFeatured();
        if (res) {
            dispatch(set_featured(res.result))
        }
    }
}
// export const _getCategories = () => {

//     return async (dispatch, getState) => {

//         let res = await api.getCategory();
//         if (res) {
//             dispatch(set_category(res.result))
//         }
//     }
// }
export const _getFavourite = () => {

    return async (dispatch, getState) => {

        let res = await api.getFavourite();
        if (res) {
            dispatch(set_favourite(res.result))
        }
    }
}

export const _getUsers = () => {

    return async (dispatch, getState) => {

        let res = await api(path.getuser, "GET",)
        if (res) {
            dispatch(set_user(res.result))
        }
    }
}
export const _getTickets = () => {

    return async (dispatch, getState) => {

        let res = await api(path.getticket, "GET",)
        console.log(res)
        if (res) {
            dispatch(set_ticket(res.result))

        }
        return false
    }
}
export const _getItems = () => {

    return async (dispatch, getState) => {


        let res = await api(path.getitem, "GET",);
        if (res) {
            dispatch(set_items(res.result))
        }
    }
}
export const _deletePrizes = () => {

    return async (dispatch, getState) => {


        let res = await api(path.deletePrize, "DELETE",);
        if (res) {
            // dispatch(set_items(res.result))
        }
    }
}
export const _deleteCategories = () => {

    return async (dispatch, getState) => {


        let res = await api(path.deleteCategories, "DELETE",);
        if (res) {
            // dispatch(set_items(res.result))
        }
    }
}
export const _getPrizes = () => {

    return async (dispatch, getState) => {


        let res = await api(path.getprizes, "GET",);
        if (res) {
            dispatch(set_prizes(res.result))
        }
    }
} 
export const _getOrders = () => {

    return async (dispatch, getState) => {


        let res = await api(path.getorders, "GET",);
        if (res) {
            dispatch(set_orders(res.result))
        }
    }
} 
 
 


