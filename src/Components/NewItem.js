import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import '../styles/NewItem.css';

function NewItem(props) {
    const [ item, setItem ] = useState('');

    const handleTextChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
           item: item,
           quantity: 1,
           isSelected: false
        }

        if (item.length > 0) {
            props.addItem(newItem);
        }
        setItem('');
    }

    return (
        <div className="add-item-box mb-2">
            <input
                type="text"
                className="add-item"
                placeholder="Add to list"
                value={item}
                onChange={handleTextChange}
            />
            <FontAwesomeIcon icon={faPlusCircle} className="add-icon" onClick={handleSubmit} />
        </div>
    )
}

export default NewItem;