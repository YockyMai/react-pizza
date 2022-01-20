import React from 'react';
import logo from "../assets/pizza-logo.svg";
import { Button } from "./";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";
import {Link} from "react-router-dom";
const Header = ({name, scrollActive}) => {
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
                        <Button className="button--cart"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;