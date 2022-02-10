const initialState = {
    pizzas: {},
    totalCount: 0,
    totalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const newPizzasObj = { //создаем переменную чтобы вытаскивать АКТУАЛЬНОЕ значение длины обьекта, так как редакс не успевает поменятся на момент как я запрашиваю значение длины
                ...state.pizzas,
                [action.payload.id]:
                    !state.pizzas[action.payload.id] ?
                        [action.payload]
                        :
                        [...state.pizzas[action.payload.id], action.payload]//Добавление пицца по payload.id (id какой либо пиццы)
            }
            let totalCount = Object.values(newPizzasObj)
            return {
                ...state,
                pizzas: newPizzasObj,
                totalCount: [].concat.apply([], totalCount).length,
                totalPrice: state.totalPrice + newPizzasObj[action.payload.id][0].price
            }
        }
        case 'DELETE_ALL_PIZZA_FROM_CART':
            return {
                ...state,
                pizzas : {},
                totalCount : 0,
                totalPrice : 0
            }
        case 'DELETE_PIZZA_FROM_CART':
            const arrayPizza = state.pizzas;
            delete arrayPizza[action.id];
            return {
                ...state,
                totalCount: state.totalCount - action.count,
                totalPrice: state.totalPrice - action.count * action.price,
                pizzas: arrayPizza
            }
        case 'INCREMENT_PIZZA_ELEMENT': {
            return {
                ...state,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.price,
            }
        }
        case 'DECREMENT_PIZZA_ELEMENT': {
            return {
                ...state,
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - action.price,
            }
        }
        default :
            return state
    }
}

export default cartReducer;