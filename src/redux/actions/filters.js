const setSortBy = (sortBy, nameSort) => ({
    type: 'SET_SORT_BY',
    payload : sortBy,
    name : nameSort
});

const setCategory = (categoryIndex) => ({
    type: 'SET_CATEGORY_BY',
    payload : categoryIndex
});


export {setCategory, setSortBy}