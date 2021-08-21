import React, {useState} from 'react';
import NewItem from './NewItem';
import Items from './Items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function List(props) {
    const [ list, setList ] = useState([
        { item: 'Milk', quantity: 1, isSelected: false },
        { item: 'Bread', quantity: 2, isSelected: false },
        { item: 'Eggs', quantity: 1, isSelected: false }, 
    ]);

    const addItem = (item) => {
        list.some(e => e.item === item.item) ? alert("Already on list!") : setList(prev => [item, ...prev]);
    }

    const removeItem = (itemToRemove) => {
        const item = list.filter(listItem => listItem.item !== itemToRemove);
        setList(item);
    }

    // Toggle the is selected feature
    const toggleComplete = (index) => {
        const newList = [...list];

        newList[index].isSelected = !newList[index].isSelected;
        setList(newList);
    }

    // Update the quantities for each item on the list
    const increaseQuantity = (index) => {
        const newList = [...list];
        newList[index].quantity++;
        setList(newList);
    }

    const decreaseQuantity = (index) => {
        const newList = [...list];
        newList[index].quantity--;
        setList(newList);
    }

    // Clear list   
    const clearList = () => {
        setList([]);
    }

    return (
        <div>
            <h3>{props.listName}</h3>
            <button onClick={() => props.removeList(props.listName)}>
                Remove List
            </button>


            <NewItem addItem={addItem} />

            <div className="list"> 
                <ul>
                    {
                        list.map((listItem, index) => {
                            return <Items listItem={listItem} index={index}
                            removeItem={removeItem}
                            toggleComplete={toggleComplete}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity} />
                        })
                    }
                </ul>
            </div>

            <button className="clear-list">
                <FontAwesomeIcon icon={faTrashAlt} onClick={clearList} />
            </button>

        </div>
    )
} 

export default List;