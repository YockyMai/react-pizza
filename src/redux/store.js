import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

//composeEnhancers функция которая содержит плагин для редакса + с помощью applyMiddleware подключает все middleware
//middleware - любая библиотека которая является промежутком между диспачем акшенена и выполнения редьюсера, (В моем случае это redux thunk - выполняет ассинхронные экшены)
//Если не использовать планиг redux то можно обойдись таким кодом " const store = createStore(rootReducer, applyMiddleware(thunk)); "
window.store = store

store.subscribe(() => console.log(store.getState()))
export default store;