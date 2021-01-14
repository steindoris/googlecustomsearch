import axios from 'axios'
import { 
    SEARCH_LIST_REQUEST,
    SEARCH_LIST_SUCCESS,
    SEARCH_LIST_FAIL,
} from '../constants/searchConstants'

export const resultList = (searchString) => async (dispatch) => {
    try {
        dispatch({type: SEARCH_LIST_REQUEST})
        
        const data = await axios.get("https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q="+searchString+"&searchType=image&key=AIzaSyCefJfjoi6Qx4o9UL7ruz8gaQ_MH71e7Ck")    

        dispatch({
            type: SEARCH_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SEARCH_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message,
        })
        
    }
}