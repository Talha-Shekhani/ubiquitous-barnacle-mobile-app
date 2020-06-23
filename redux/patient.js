import * as ActionTypes from './ActionTypes'

export const patient = (state = {
    errMess: null,
    data: []
}, action) => {
    switch (action.type) {
        case ActionTypes.P_SIGNIN:
            return {...state, data: action.payload }
        case ActionTypes.P_SIGNUP:
            console.log(action.payload + 'payload')
            return {...state, data: action.payload }
            // return {...state, errMess: null, dishes: action.payload}
        // case ActionTypes.DISHES_LOADING:
        //     return {...state, errMess: null, dishes: []}
        // case ActionTypes.DISHES_FAILED:
        //         return {...state, errMess: action.payload, dishes: []}
        default:
            return state
    }
}