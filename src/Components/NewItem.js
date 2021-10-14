import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

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
        <div className="flex justify-center my-1 mb-3 border rounded-full
        border-accent">
            <input
                type="text"
                className="w-5/6 mx-3 focus:outline-none"
                placeholder="Add to list"
                value={item}
                onChange={handleTextChange}
            />
            <FontAwesomeIcon icon={faPlusCircle} className="mx-2 my-1 text-xl text-accent" onClick={handleSubmit} />
        </div>
    )
}

export default NewItem;