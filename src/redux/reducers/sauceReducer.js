import { getSauce } from '../../api/api'
const SET_SAUCE = 'SET SAUCE'


let initialState = {
    sauce: [],
    isLoaded: false
}

export const saucePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SAUCE:
            return {
                ...state,
                sauce: action.sauce,
                isLoaded: true
            }
        default: return state
    }
}


const setSauce = (sauce) => ({ type: SET_SAUCE, sauce })

export const getSauceThunkCreator = () => {
    return (dispatch) => {
        getSauce().then(response => dispatch(setSauce(response.data)))
    }
}















