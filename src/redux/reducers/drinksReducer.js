import { getDrinks } from '../../api/api'
const ADD_NEW_ITEMS = 'ADD_NEW_ITEMS'
const SET_DRINKS = 'SET_DRINKS'


let initialState = {
    drinks: [],
    isLoaded: false
}

export const drinksPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ITEMS:
            return {
                ...state,
                items: [...state.items, action.newItems],
                totalCount: state.totalCount + 1
            }

        case SET_DRINKS:
            return {
                ...state,
                drinks: action.drinks,
                isLoaded: true
            }


        default: return state
    }
}




export const addNewItemAC = (newItems) => ({ type: ADD_NEW_ITEMS, newItems })
const setDrinks = (drinks) => ({ type: SET_DRINKS, drinks })


// Thunks
export const getDrinksThunkCreator = () => {
    return (dispatch) => {
        getDrinks().then(response => {
            dispatch(setDrinks(response.data))
        })
    }

}













