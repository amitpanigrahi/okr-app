import {FAILURE, REQUEST, SUCCESS} from "../helpers";
import {GET_OKR_LIST} from "./actionList";

const okrList = (state = {isLoading: false, data: [], error: {}}, action) => {
    switch (action.type) {
        case GET_OKR_LIST[REQUEST]:
            return ({isLoading: true, data: []})
        case GET_OKR_LIST[SUCCESS]:
            return ({isLoading: false, data: [...action.payload]})
        case GET_OKR_LIST[FAILURE]:
            return ({isLoading: false, data: [], error: action.payload})
        default:
            return state
    }
}

export default okrList;
