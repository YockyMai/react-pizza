import React, {useState} from 'react';

const Categor = ({items}) => {
    const [state, setState] = useState(true);
    const onSelectItem = (index) => {
        setState(index);
    }
    const nullSelectItems = () => {
        setState(null);
    }
    return (
        <div className="categories">
            <ul>
                <li onClick={() => nullSelectItems()}
                    className={state === null ? 'active' : ''}
                >
                    Все
                </li>
                {items.map((name, index) => (
                    <li className={state === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}
                    >
                        {name}
                    </li>
                ))}

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
