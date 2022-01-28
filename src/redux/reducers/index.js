import {combineReducers} from "redux";

import pizzasReducer from "./pizzas";
import filterReducer from "./filter";
import cartReducer from "./cart";


const rootReducer = combineReducers({
    filterReducer,
    pizzasReducer,
    cartReducer
}) // Обьеденяет все Reducers в один главный


export default rootReducer;