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
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
                <h3 className="text-xl font-medium text-black">{props.listName}</h3>

                <button onClick={() => props.removeList(props.listName)} className="m-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
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
                        <button className="clear-list mt-2" onClick={clearList}>
                            <FontAwesomeIcon icon={faTrashAlt} /> remove all items
                        </button>
                    </ul>
                    
                </div>

                
            </div>
        </div>
    )
} 

export default List;