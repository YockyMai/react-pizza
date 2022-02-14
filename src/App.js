import React from "react";
import {Header} from "./components";
import 'react-loading-skeleton/dist/skeleton.css'
import {Route, Routes} from "react-router-dom";
import {Cart, Home} from "./pages";
import {useSelector} from "react-redux";

function App() {
    const pizzas = useSelector(state => state.pizzasReducer.items)
    
    return (
        <div className="App">
            <div className="wrapper">
                <Header name={'pizza slice'}/>
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home items={pizzas}/>} exact/>
                        <Route path="/cart" element={<Cart items={pizzas}/>} exact/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

// const mapStoreToProps = (state) => {
//     return {
//         pizzas: state.pizzasReducer.items,
//         isLoaded: state.pizzasReducer.isLoaded
//     }
// }

export default App;
