const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const CLEAR_ALL_CART = 'CLEAR_ALL_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const PLUS_ITEM = 'PLUS_ITEM'
const MINUS_ITEM = 'MINUS_ITEM'

let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

/*

Код логики работы корзины, представленный ниже, не мой.
Код логики работы корзины, представленный ниже, не мой.
Код логики работы корзины, представленный ниже, не мой.

*/


const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};




export const cartPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ITEM:
            

            const currentItem = !state.items[action.addNewItem.id] // Если объект пустой
                ? [action.addNewItem] // Создать новый массив и поместить туда action
                : [...state.items[action.addNewItem.id].items, action.addNewItem]

            const newItems = {
                ...state.items,
                [action.addNewItem.id]: {
                    items: currentItem,
                    totalPrice: getTotalPrice(currentItem)
                } // Иначе, добавить к старым значениям новое
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allItems = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allItems)


            return {
                ...state,
                items: newItems,
                totalCount: allItems.length,
                totalPrice,
            }

        case CLEAR_ALL_CART:
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }

        case REMOVE_ITEM: {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.id].totalPrice;
            const currentTotalCount = newItems[action.id].items.length;
            delete newItems[action.id];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case PLUS_ITEM: {
            const newObjItems = [
                ...state.items[action.id].items,
                state.items[action.id].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.id]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };

        }
        case MINUS_ITEM: {
            const oldItems = state.items[action.id].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.id].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.id]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        default: return state
    }
}





export const addNewItem = (addNewItem) => ({ type: ADD_NEW_ITEM, addNewItem })
export const clearCart = () => ({ type: CLEAR_ALL_CART })
export const removeItem = (id) => ({ type: REMOVE_ITEM, id })
export const minusItem = (id) => ({ type: MINUS_ITEM, id })
export const plusItem = (id) => ({ type: PLUS_ITEM, id })













