import React from 'react';
import {Categor, PizzaElem, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzaLoading from "../components/PizzaBlock/PizzaLoading";
import {addPizzaCart} from "../redux/actions/cart";

const sortItems = [
    {name: "Популярности", sortBy: 'rating'},
    {name: "Цене", sortBy: 'price'},
    {name: "Алфавиту", sortBy: 'name'},
]

const Home = ({items}) => {
    const dispatch = useDispatch()
    const loader = useSelector(state => state.pizzasReducer.isLoaded);
    const sortBy = useSelector(state => state.filterReducer.sortBy);
    const category = useSelector(state => state.filterReducer.index);
    const cartItems = useSelector(state => state.cartReducer.pizzas);
    const onClickPizzaToCart = (pizzaObj) => {
        dispatch(addPizzaCart(pizzaObj));
    }
    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy]);
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
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    loader ?
                        items.map((obj) => (<PizzaElem addedCart={cartItems[obj.id] && cartItems[obj.id].length}
                                                       onClickPizzaToCart={onClickPizzaToCart}
                                                       dispatch={dispatch}
                                                       key={obj.name}
                                                       {...obj}/>))
                        :
                        Array(10).fill(<PizzaLoading key={Array.id}/>)
                }
            </div>
        </div>
    );
};

export default Home;
