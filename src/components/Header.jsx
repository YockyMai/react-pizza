import React from 'react';
import logo from "../assets/pizza-logo.svg";
import { Button } from "./";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const Header = ({name}) => {

    const {totalPrice, totalCount} = useSelector(({cartReducer}) => ({
        totalCount : cartReducer.totalCount,
        totalPrice : cartReducer.totalPrice,
    }))

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
        <div className='header-container'>
            <div className={classNames('header', {
                'header__fixed' : scrollActive,
                'header' : !scrollActive
            })}>
                <div className="container">
                    <Link to="/">
                        <div className="header__logo">
                            <img width="38" src={logo} alt="Pizza logo"/>
                            <div>
                                <h1>{name || <Skeleton />}</h1>
                                <p>самая вкусная пицца во вселенной</p>
                            </div>
                        </div>
                    </Link>
                    <div className="header__cart">
                        <Button totalPrice={totalPrice} totalCount={totalCount} className="button--cart"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;