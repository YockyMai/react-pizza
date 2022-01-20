import React, {useState} from 'react';
import Swiper from 'swiper';


const Categor = ({items}) => {
    const [state, setState] = useState(true);
    const onSelectItem = (index) => {
        setState(index);
    }
    const nullSelectItems = () => {
        setState(true);
    }

    //Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters

        loop: false,
        spaceBetween: 10,
        // And if we need scrollbar
        centeredSlides: false,
        centerInsufficientSlides: true,
        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: "auto",

            },
            // when window width is >= 640px
            931: {
                slidesPerView: 2.5,
            },
            1049:{
                slidesPerView: 3.5,
            },
            1266:{
                slidesPerView: 4.5,
            },
            1485: {
                slidesPerView: 5.5,
            }
        }
    });
    return (
        <div className="categories">
            <ul>
                <li onClick={() => nullSelectItems()}
                    className={state === true ? 'active' : ''}
                >
                    Все
                </li>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {items.map((name, index) => (
                            <div className="swiper-slide">
                                <li className={state === index ? 'active' : ''}
                                    onClick={() => onSelectItem(index)}
                                    key={`${name}_${index}`}
                                >
                                    {name}
                                </li>
                            </div>
                        ))}
                    </div>
                </div>
            </ul>

        </div>
    );
};
// class Categor extends React.Component {
//     state = {
//         activeItem: null,
//     };
//     onSelectItem = (index) => {
//         this.setState({
//             activeItem : index
//         })
//     }
//     nullSelectItem = () => {
//         this.setState({
//             activeItem : null
//         })
//     }
//     render() {
//         const {items, onClick} = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li onClick={() => this.nullSelectItem()} className={this.state.activeItem === null ? 'active' : ''}>Все</li>
//                     {items.map((name, index) => (
//                         <li className={this.state.activeItem === index ? 'active' : ''}
//                             onClick={() => this.onSelectItem(index)}
//                             key={`${name}_${index}`}>{name}
//                         </li>
//                     ))}
//
//                 </ul>
//             </div>
//         )
//     }
// }

export default Categor;
