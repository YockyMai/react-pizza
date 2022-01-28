const initialState = {
    cartClear : true,
    indexPizza : [],
    numberPizzas : 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART_COMPONENT':
            if (state.numberPizzas > 0){
                return {
                    ...state,
                    cartClear: false
                }
            } else return state

        case 'EMPTY_CART' :
            return {

            }

        case 'SET_PIZZAS_TO_CART' :
            return {
                ...state,
                indexPizza: [...state.indexPizza, action.index],
                numberPizzas: state.numberPizzas + 1,
            }
        default : return state
    }
}

export default cartReducer;