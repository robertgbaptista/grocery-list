import React, { useEffect, useState, useRef } from 'react';
import List from './List';

function AddList() {
    const [ listName, setListName ] = useState('');
    const [ listGroup, setListGroup ] = useState([]);
    const ref = useRef(listGroup);

    const updateState = (newState) => {
        ref.current = newState;
        setListGroup(newState);
    }

    useEffect(() => {
        updateState(listGroup);
    })

    const addListName = (e) => {
        setListName(e.target.value);
    }

    const addNewList = (e) => {
        e.preventDefault();
        setListName('');

        setListGroup([
            ...listGroup, <List listName={listName} key={listName} removeList={removeList} />
        ])
    }

    const removeList = (listName) => {
        let newListGroup = ref.current.filter(list => list.props.listName !== listName);
        setListGroup(newListGroup);
    }

    return (
        <div>
            <form className="flex flex-row justify-center" onSubmit={addNewList}>
                <input className="w-1/2 md:w-5/12 max-w-md bg-transparent border-b border-accent text-white
                focus:bg-transparent focus:outline-none"
                    type="text"
                    name="item"
                    aria-label="Add new list"
                    placeholder="Add new list"
                    value={listName}
                    onChange={addListName}
                    autoComplete="off"
                />
                <button type="submit" className="w-1/3 md:w-3/12 max-w-sm p-2 bg-accent text-primary font-bold rounded-full">
                    Add List
                </button>
            </form>

            <div>
                
                <div className="flex flex column flex-wrap space-x-4 text-center">
                    {listGroup}
                </div>
                
            </div>
        </div>
    )
}

export default AddList;