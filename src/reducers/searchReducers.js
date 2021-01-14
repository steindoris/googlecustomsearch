import {
    SEARCH_LIST_REQUEST,
    SEARCH_LIST_SUCCESS,
    SEARCH_LIST_FAIL,

} from '../constants/searchConstants'


export const listResultReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case SEARCH_LIST_REQUEST:
            return {loading: true, items: []}
        case SEARCH_LIST_SUCCESS:
            return {loading: false, items: action.payload.data.items}
        case SEARCH_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}