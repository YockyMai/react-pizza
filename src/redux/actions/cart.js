export const setCartComponent = (index) => ({
    type: 'SET_CART_COMPONENT',
    payload : index,
})

export const setDeleteCart = () => ({
    type: 'SET_DELETE_CART',
})

export const setPizzasToCart = (index) => ({
    type: 'SET_PIZZAS_TO_CART',
    index : index
})
