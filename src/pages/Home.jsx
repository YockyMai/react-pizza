import React from 'react';
import {Categor, PizzaElem, SortPopup} from "../components";

const Home = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categor items={[
                    "Мясные",
                    "Вегетарианская",
                    "Гриль",
                    "Острые",
                    "Закрытые",
                ]}
                />

                <SortPopup items={[
                    "Популярности",
                    "Цене",
                    "Алфавиту"
                ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((obj, index) => (
                    <PizzaElem key={obj.id} items = {obj}/>
                ))}

            </div>
        </div>
    );
};

export default Home;
