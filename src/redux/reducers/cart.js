const initialState = {
    pizzas: [],
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
            }
        }
        default :
            return state
    }
}

export default cartReducer;