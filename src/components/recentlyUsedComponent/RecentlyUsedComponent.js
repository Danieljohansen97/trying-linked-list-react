import React, { useState, useRef } from "react"
import { List, Item } from "linked-list"

const RecentlyUsedComponent = () => {
    const [list, setList] = useState(new List());
    const [inputText, setInputText] = useState("");
    const inputRef = useRef(null)

    function addNewItem() {
        let item = new Item(inputText);
        list.append(item);
    }

    function handleInputChange(e) {
        setInputText(inputRef.current.value)
    }

    return (
        <div>
            <form>
                <label>Write a string, to simulate it being an url / filename: </label>
                <input ref={inputRef} type="text" onChange={handleInputChange} />
            </form>
            <button onClick={() => addNewItem()}>Add Item</button>

            <ol>
                {list.toArray().map((item) => {
                    return (
                        <li>{item.value}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default RecentlyUsedComponent;