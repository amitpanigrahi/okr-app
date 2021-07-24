import {action, actionCreator, REQUEST, SUCCESS, FAILURE} from "../helpers";
import {GET_OKR_LIST} from "./actionList";
export const getOkrList = {
    request: (payload) => action(GET_OKR_LIST[REQUEST], payload),
    success: (payload) => action(GET_OKR_LIST[SUCCESS], payload),
    FAILURE: (e) => action(GET_OKR_LIST[FAILURE], e),
}
