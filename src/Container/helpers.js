export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const actionCreator = (type = "") => {
    const resp = {};
    [REQUEST, SUCCESS, FAILURE].forEach(val => {
        resp[val] = type + "_" + val
    })
    return resp;
};

export const action = (type, payload) => ({type, payload: payload});
