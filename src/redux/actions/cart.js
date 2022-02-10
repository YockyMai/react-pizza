export const addPizzaCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload : pizzaObj,
});

export const deleteAllPizzaFromCart = () => ({
    type: 'DELETE_ALL_PIZZA_FROM_CART',
});

export const deletePizzaFromCart = (count, price, id) =>({
    type: 'DELETE_PIZZA_FROM_CART',
    count : count,
    price : price,
    id : id
})

export const incrementPizzaElem = (price) => ({
    type: 'INCREMENT_PIZZA_ELEMENT',
    price : price
})

export const decrementPizzaElem = (price) => ({
    type: 'DECREMENT_PIZZA_ELEMENT',
    price : price
})