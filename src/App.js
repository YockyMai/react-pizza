import React from "react";
import {Header} from "./components";
import 'react-loading-skeleton/dist/skeleton.css'
import {Route, Routes} from "react-router-dom";
import {Cart, Home} from "./pages";


function App() {
    const [scrollActive, handleScrollActive] = React.useState(false);

    window.onscroll = function showHeader() {
        if (window.pageYOffset > 230){

            handleScrollActive(true);
        }
        if (window.pageYOffset === 0){
            handleScrollActive(false);
        }
    }
    return (
        <div className="App">
            <div className="wrapper">
                <Header scrollActive={scrollActive} name={'pizza slice'}/>

                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        <Route path="/cart" element={<Cart />} exact />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
