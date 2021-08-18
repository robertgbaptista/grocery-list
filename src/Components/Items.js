import { faCheckCircle, faChevronCircleLeft, faChevronCircleRight, faCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import '../styles/Item.css';

function Items(props) {
    const { listItem,
            index,
            removeItem,
            toggleComplete,
            increaseQuantity,
            decreaseQuantity } = props;

    const handleRemoveClick = () => {
        removeItem(listItem.item);
    }

    const handleToggleClick = () => {
        toggleComplete(index);
    }

    const handleIncreaseClick = () => {
        increaseQuantity(index);
    }
    const handleDecreaseClick = () => {
        decreaseQuantity(index);
    }

    return (
        <li className="item-container">

            <div className="item" onClick={handleToggleClick}>
                {listItem.isSelected ? 
                    <div>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span className="completed">{listItem.item}</span>
                    </div>
                    :
                    <div>
                        <FontAwesomeIcon icon={faCircle} />
                        <span>{listItem.item}</span>
                    </div>
                }
            </div>

            <div className="quantity">
                { listItem.quantity === 1 ?
                    <button>
                        <FontAwesomeIcon icon={faTimesCircle} onClick={handleRemoveClick} />
                    </button>
                    :
                    <button>
                        <FontAwesomeIcon icon={faChevronCircleLeft} onClick={handleDecreaseClick} />
                    </button>
                }
                <span>{listItem.quantity}</span>
                <button>
                    <FontAwesomeIcon icon={faChevronCircleRight} onClick={handleIncreaseClick} />
                </button>
            </div>

        </li>
    )
}

export default Items; 