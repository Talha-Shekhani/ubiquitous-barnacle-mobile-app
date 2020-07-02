import * as ActionTypes from './ActionTypes'

export const doctor = (state = {
    errMess: null,
    data: []
}, action) => {
    switch (action.type) {
        case ActionTypes.D_SIGNUP:
            return {...state, errMess: null, data: action.payload}
        case ActionTypes.D_SIGNUP_FAILED:
            return {...state, errMess: action.payload, data: []}
        default:
            return state
    }
}