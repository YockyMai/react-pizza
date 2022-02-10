const initialState = {
    index : null,
    sortBy: 'rating',
    name: 'Популярности'
}

const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_SORT_BY' : {
            return {
                ...state,
                sortBy : action.payload,
                name: action.name
            }
        }
        case 'SET_CATEGORY_BY' : {
            return {
                ...state,
                index : action.payload
            }
        }
        default: return state
    }
}

export default filterReducer;
