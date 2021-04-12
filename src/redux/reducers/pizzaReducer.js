import { getPizzas } from '../../api/api'
const SET_PIZZA = 'SET_PIZZA'

let initialState = {
    pizza: [],
    isLoaded: false
}


export const pizzaPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PIZZA:
            return {
                ...state,
                pizza: action.pizzas,
                isLoaded: true
            }
        default: return state
    }
}



const setPizzas = (pizzas) => ({ type: SET_PIZZA, pizzas })

export const getPizzasThunkCreator = () => {
    return (dispatch) => {
        getPizzas().then(response => dispatch(setPizzas(response.data)))
    }
}












