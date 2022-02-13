import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADER',
    payload: payload,
})

export const fetchPizzas = (name, category) => (dispatch) => {
    console.log(name)
    console.log(category)
    dispatch(setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${name}&_order=asc`).then(resp => {
        console.log()
        dispatch(setPizzas(resp.data));
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload : items
});