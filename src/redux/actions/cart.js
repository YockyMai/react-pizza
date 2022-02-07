export const addPizzaCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload : pizzaObj,
})

export const setTotalPrice = (price) => ({
    type: 'SET_TOTAL_PRICE',
    payload : price
})

export const setTotalCount = (count) => ({
    type: 'SET_TOTAL_COUNT',
    payload : count
})