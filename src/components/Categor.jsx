import React from 'react';
import {connect, useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/filters";


const Categor = ({items, indexCategory}) => {
    let dispatch = useDispatch()
    const onSelectItem = (index) => {
        dispatch(setCategory(index))
    }
    const nullSelectItems = () => {
        dispatch(setCategory(null))
    }
    return (
        <div className="categories">
            <ul>
                <li onClick={() => nullSelectItems()}
                    className={indexCategory === null ? 'active' : ''}
                >
                    Все
                </li>

                {items.map((name, index) => (
                    <li key={`${name}_${index}`} className={indexCategory === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                    >
                        {name}
                    </li>
                ))}
            </ul>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        indexCategory: state.filterReducer.index
    }
}


export default connect(mapStateToProps)(Categor);
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


