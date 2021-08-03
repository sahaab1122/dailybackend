import { SET_PRIZES, SET_COUPON, SET_FAVOURITE, SET_FEATURED, SET_ITEMS, SET_ORDERS, SET_TRANSACTIONS, SET_USERS, SET_TICKETS } from "./Types";

export const set_prizes = (payload) => (
    {
        type: SET_PRIZES,
        payload
    }
)
export const set_items = (payload) => (
    {
        type: SET_ITEMS,
        payload
    }
)

export const set_favourite = (payload) => (
    {
        type: SET_FAVOURITE,
        payload
    }
)
export const set_featured = (payload) => (
    {
        type: SET_FEATURED,
        payload
    }
)

export const set_user = (payload) => (
    {
        type: SET_USERS,
        payload
    }
)
export const set_ticket = (payload) => (
    {
        type: SET_TICKETS,
        payload
    }
)

export const set_coupon = (payload) => (
    {
        type: SET_COUPON,
        payload
    }
)
export const set_orders = (payload) => (
    {
        type: SET_ORDERS,
        payload
    }
)
export const set_transactions = (payload) => (
    {
        type: SET_TRANSACTIONS,
        payload
    }
)