import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import PizzaLoading from "./PizzaLoading";

const Index = ({addedCart ,onClickPizzaToCart ,name, imageUrl, sizes, types, price, id, isLoading}) => {
    let availableTypes = ['тонкое','традиционное'];
    let availableSizes = [26,30,40];
    const [sizePizza , setSize] = React.useState(0);
    const [typePizza , setType] = React.useState(types[0]);
    console.log(sizePizza)
    const pizzaObj = {
        id: id,
        name: name,
        imageUrl: imageUrl,
        size : availableSizes[sizePizza],
        type : availableTypes[typePizza],
        price : price
    }
    if (isLoading){
        return <PizzaLoading/>
    }
    return (
        <div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {availableTypes.map((type, index) =>
                            <li key={`${type}_${index}`}
                                onClick={() => setType(index)}
                                className={classNames({
                                active: index === typePizza,
                                disabled: !types.includes(index)
                            })}
                            >
                                {type}
                            </li>
                        )}
                    </ul>
                    <ul>
                        {availableSizes.map((size,index) =>
                            <li key={size}
                                onClick={() => setSize(index)}
                                className={classNames({
                                    active: index === sizePizza,
                                    disabled: !sizes.includes(size),
                                })}
                            >
                                {size} см.
                            </li>
                        )}
                    </ul>
                </div>
                <div className="pizza-block__bottom" onClick={() => onClickPizzaToCart(pizzaObj)}>
                    <div className="pizza-block__price">от {price} ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCart ?
                            <i>{addedCart}</i>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    onClickPizzaToCart : PropTypes.func.isRequired,
    addedCart: PropTypes.number
}

export default Index;
