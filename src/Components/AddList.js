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
            <form className="add-new-list" onSubmit={addNewList}>
                <input
                    type="text"
                    name="item"
                    aria-label="Add new list"
                    placeholder="Add new list"
                    value={listName}
                    onChange={addListName}
                />
                <button type="submit">
                    Add New List
                </button>
            </form>

            <div>
                <div className="row">
                    <h3>{listName}</h3>
                </div>
                {listGroup}
            </div>
        </div>
    )
}

export default AddList;