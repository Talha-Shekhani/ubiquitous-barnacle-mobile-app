import * as ActionTypes from './ActionTypes'

export const patient = (state = {
    errMess: null,
    data: []
}, action) => {
    switch (action.type) {
        case ActionTypes.P_SIGNIN:
            return {...state, errMess: null, data: action.payload }
            // return {...state, errMess: null, dishes: action.payload}
        // case ActionTypes.DISHES_LOADING:
        //     return {...state, errMess: null, dishes: []}
        // case ActionTypes.DISHES_FAILED:
        //         return {...state, errMess: action.payload, dishes: []}
        case ActionTypes.P_SIGNUP:
            return {...state, errMess: null, data: action.payload }
        case ActionTypes.P_SIGNIN_FAILED:
            return {...state, errMess: action.payload, data: []}
        case ActionTypes.P_APPOINTMENT_DATEAILS_OF_OTHER:
                return {...state,errMess:null ,data:action.payload,}
        case ActionTypes.P_APPOINTMENT_DATEAILS_OF_OTHER_FAILED:
                    return {...state,errMess:action.payload ,data:[]}
                    case ActionTypes.P_DOCTOR_INFO:
                        return {...state,errMess:null ,data:action.payload}
                        case ActionTypes.P_DOCTOR_INFO_FAILED:
                    return {...state,errMess:action.payload ,data:[]
                    
                    }
                    case ActionTypes.P_DOCTOR_DETAILS:
                        return {...state,errMess:null ,data:action.payload
                    }
                        case ActionTypes.P_DOCTOR_DETAILS_FAILED:
                        return {...state,errMess:action.payload ,data:[]}
        default:
            return state
    }
}