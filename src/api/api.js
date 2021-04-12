import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/leonard94/test/'
})

export const getDrinks = () => {
    return instance.get('drinks')
}
export const getPizzas = () => {
    return instance.get('pizza')
}
export const getSauce = () => {
    return instance.get('sauce')
}