import { GET_USER_REQUEST } from "../Authentication/ActionType"
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "./ActionType"

const initialState = {
    orders: [],
    loading: false,
    error: null,
}
export const OrderReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_ORDER_REQUEST:
        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                error: null,
            }
        case GET_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}