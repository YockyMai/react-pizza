import React from "react";
import {Header} from "./components";
import 'react-loading-skeleton/dist/skeleton.css'
import {Route, Routes} from "react-router-dom";
import {Cart, Home} from "./pages";
import {connect, useDispatch} from "react-redux";
import {fetchPizzas} from "./redux/actions/pizzas";


function App(props) {
    let dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, []);

    const [scrollActive, handleScrollActive] = React.useState(false);
    window.onscroll = function showHeader() {
        if (window.pageYOffset > 230) {
            handleScrollActive(true);
        }
        if (window.pageYOffset === 0) {
            handleScrollActive(false);
        }
    }

    return (
        <div className="App">
            <div className="wrapper">
                <Header scrollActive={scrollActive} name={'pizza slice'}/>
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home items={props.pizzas}/>} exact/>
                        <Route path="/cart" element={<Cart items={props.pizzas}/>} exact/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

const mapStoreToProps = (state) => {
    return {
        pizzas: state.pizzasReducer.items,
        isLoaded: state.pizzasReducer.isLoaded
    }
}

export default connect(mapStoreToProps)(App);
