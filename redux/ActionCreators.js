import * as ActionTypes from './ActionTypes'
import axios from 'axios'
import { useNavigation, useTheme } from '@react-navigation/native'
// import { baseUrl } from '../shared/baseUrl'

// const navigation = useNavigation();


export const p_signin = (values) => ({
    type: ActionTypes.P_SIGNIN,
    payload: values
})


export const p_signup = (values) => ({
    type: ActionTypes.P_SIGNUP,
    payload: values
})

export const p_signUpPage = (value) => (dispatch) => {
                axios.post('http://192.168.1.112:5000/api/patient/insert/patients/details',
                value
                )
                .then(response => dispatch(p_signup(value)))
                .then(response => {
                    console.log(response.data);
                    // navigation.navigate.dispatch("RouteHome")
                    // navigation.navigate("RouteHome")
                })
                .catch(error => {
                    console.log(error);
                })
            
}


export const p_signInPage = (value) => (dispatch) => {
    axios.post('http://192.168.1.112:5000/api/patient/login',
    value
    )
    .then(response => dispatch(p_signin(response.data)))
    // .then(response => {
    //     // console.log(response.data);
    //     // navigation.navigate("RouteHome")
    // })
    .catch(error => {
        dispatch(p_signin_failed(error.message))
    })

}

export const p_appointmentDetailsOfOther =(value)=>(dispatch)=>{
    axios.post('http://192.168.1.111:5000/api/patient/appointmentDetailsOfOther',
    value
    )
    .then(response=>dispatch(p_appointmentDetailsOfOther_Type(response)))
    .catch(error=>{
        dispatch(p_appointmentDetailsOfOther_Failed_Type(error.message))
    })
}

export const d_doctor_details =(value)=>(dispatch)=>{
    console.log(value)
    axios.get(`http://192.168.1.104:5000/api/patient/getDoctorDetails/${value}`,{
        id: value
    } )
    .then(response=>{
         dispatch(d_doctor_details_type(response.data.results))
        console.log(JSON.stringify(response.data))
    })
    
   
    .catch(error=>{
        dispatch(d_doctor_details_type_failed(error.message))
    })
}

export const d_doctorInfo =(value =>(dispatch)=>{
    axios.get('http://192.168.1.104:5000/api/patient/getDoctor'
    )
    .then(response=>{
        if (response.status ) {
            return response
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response.data
            console.log(error)
            throw error
        }
    })
    // .then(response => response.json())
    .then(response => dispatch(p_doctorInfo_Type(response.data)))
    .catch(error=>{
        dispatch(p_doctorInfo_Type_Failed(error.message))
    })
})

export const d_doctor_details_type=(value)=>({
    type:ActionTypes.P_DOCTOR_DETAILS,
    payload:value
  
})

export const d_doctor_details_type_failed=(value)=>({
    type:ActionTypes.P_DOCTOR_DETAILS_FAILED,
    payload:value
})

export const p_doctorInfo_Type=(value)=>({
    type:ActionTypes.P_DOCTOR_INFO,
    payload:value
})

export const p_doctorInfo_Type_Failed=(value)=>({
    type:ActionTypes.P_DOCTOR_INFO_FAILED,
    payload:value
})

export const p_appointmentDetailsOfOther_Type=(values)=>({
    type:ActionTypes.P_APPOINTMENT_DATEAILS_OF_OTHER,
    payload:values
})

export const p_appointmentDetailsOfOther_Failed_Type=(err)=>({
    type:ActionTypes.P_APPOINTMENT_DATEAILS_OF_OTHER_FAILED,
    payload:err
})

export const p_signin_failed = (err) => ({
    type: ActionTypes.P_SIGNIN_FAILED,
    payload: err
})

// export const addComment = (comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// })

// export const postComment = (dishId, rating, author, comment) => (dispatch) => {
//     const  newComment = {
//             dishId: dishId,
//             rating: rating,
//             author: author,
//             comment: comment
//     }
//     newComment.date = new Date().toISOString()
//     return fetch(baseUrl + 'comments', {
//         method: 'POST',
//         body: JSON.stringify(newComment),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'same-origin'
//     })
//     .then(response => {
//         if (response.ok) {
//             return response
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response
//             throw error
//         }
//     },
//     error => {
//         var errmess = new Error(error.message)
//         throw errmess
//     })
//     .then(response => response.json())
//     .then(response => dispatch(addComment(response)))
//     .catch(error => {console.log('Post Comments', error.message)
//     alert("Your Comment could not be posted\nError: " + error.message)})
// }
// export const fetchDishes = () => (dispatch) => {
//     dispatch(dishesLoading(true))
//     return fetch(baseUrl + 'dishes')
//     .then(response => {
//         if (response.ok) {
//             return response
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response
//             throw error
//         }
//     },
//     error => {
//         var errmess = new Error(error.message)
//         throw errmess
//     })
//     .then(response => response.json())
//     .then(dishes => dispatch(addDishes(dishes)))
//     .catch(error => dispatch(dishesFailed(error.message)))
// }

// export const dishesLoading = () => ({
//     type: ActionTypes.DISHES_LOADING
// })

// export const dishesFailed = (errmess) => ({
//     type: ActionTypes.DISHES_FAILED,
//     payload: errmess
// })

// export const addDishes = (dishes) => ({
//     type: ActionTypes.ADD_DISHES,
//     payload: dishes
// })

// export const fetchComments = () => (dispatch) => {
//     return fetch(baseUrl + 'comments')
//     .then(response => {
//         if (response.ok) {
//             return response
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response
//             throw error
//         }
//     },
//     error => {
//         var errmess = new Error(error.message)
//         throw errmess
//     })
//     .then(response => response.json())
//     .then(comments => dispatch(addComments(comments)))
//     .catch(error => dispatch(commentsFailed(error.message)))
// }

// export const commentsFailed = (errmess) => ({
//     type: ActionTypes.COMMENTS_FAILED,
//     payload: errmess
// })

// export const addComments = (comments) => ({
//     type: ActionTypes.ADD_COMMENTS,
//     payload: comments
// })

// export const fetchPromos = () => (dispatch) => {
//     dispatch(promosLoading(true))
//     return fetch(baseUrl + 'promotions')
//     .then(response => {
//         if (response.ok) {
//             return response
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response
//             throw error
//         }
//     },
//     error => {
//         var errmess = new Error(error.message)
//         throw errmess
//     })
//     .then(response => response.json())
//     .then(promos => dispatch(addPromos(promos)))
//     .catch(error => dispatch(promosFailed(error.message)))
// }

// export const promosLoading = () => ({
//     type: ActionTypes.PROMOS_LOADING
// })

// export const promosFailed = (errmess) => ({
//     type: ActionTypes.PROMOS_FAILED,
//     payload: errmess
// })

// export const addPromos = (promos) => ({
//     type: ActionTypes.ADD_PROMOS,
//     payload: promos
// })

// export const fetchLeaders = () => (dispatch) => {
//     dispatch(leadersLoading(true))
//     return fetch(baseUrl + 'leaders')
//     .then(response => {
//         if (response.ok) {
//             return response
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response
//             throw error
//         }
//     },
//     error => {
//         var errmess = new Error(error.message)
//         throw errmess
//     })
//     .then(response => response.json())
//     .then(leaders => dispatch(addLeaders(leaders)))
//     .catch(error => dispatch(leadersFailed(error.message)))
// }

// export const leadersLoading = () => ({
//     type: ActionTypes.LEADERS_LOADING
// })

// export const leadersFailed = (errmess) => ({
//     type: ActionTypes.LEADERS_FAILED,
//     payload: errmess
// })

// export const addLeaders = (leaders) => ({
//     type: ActionTypes.ADD_LEADERS,
//     payload: leaders
// })

// export const addFeedback = (feedback) => ({
//     type: ActionTypes.ADD_FEEDBACK,
//     payload: feedback
// })

// export const postFeedback = (values) => (dispatch) => {
//     const newFeedback = {
//         firstname: values.firstname,
//         lastname: values.lastname,
//         telnum: values.telnum,
//         email: values.email,
//         agree: values.agree,
//         contactType: values.contactType,
//         message: values.message
//     }
//     newFeedback.date = new Date().toISOString()
//     return fetch(baseUrl + 'feedback', {
//         method: 'POST',
//         body: JSON.stringify(newFeedback),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'same-origin'
//     })
//     .then(response => {
//         if (response.ok) {
//             return response
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response
//             throw error
//         }
//     },
//     error => {
//         var errmess = new Error(error.message)
//         throw errmess
//     })
//     .then(response => response.json())
//     .then(response => {dispatch(addFeedback(response))
//     alert("Thank you for your Feedback!" + JSON.stringify(response))})
//     .catch(error => {console.log('Post Feedback', error.message)
//     alert("Your Feedback could not be Submitted\nError: " + error.message)})
// }

// export const postFavorite = (dishId) => (dispatch) => {
//     setTimeout(() => {
//         dispatch(addFavorite(dishId))
//     }, 2000)
// }

// export const addFavorite = (dishId) => ({
//     type: ActionTypes.ADD_FAVORITE,
//     payload: dishId
// })

// export const deleteFavorite = (dishId) => ({
//     type: ActionTypes.DELETE_FAVORITE,
//     payload: dishId
// })