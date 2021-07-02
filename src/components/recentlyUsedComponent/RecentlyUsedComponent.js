import React, { useState, useRef, useEffect } from "react"

const RecentlyUsedComponent = () => {
    const inputRef = useRef(null)
    const [inputText, setInputText] = useState(null);
    const [arrayOfItems, setArrayOfItems] = useState([]);

    useEffect(() => {
        
    })

    function addNewItem(e) {
        e.preventDefault();
        let temporaryArray = arrayOfItems;
        const index = temporaryArray.indexOf(inputText);

        // Check if item exists in array and delete it
        if (index !== -1) {
            temporaryArray.splice(index, 1);
        }
        // Add item to array
        temporaryArray.splice(0, 0, inputText)
        // Make sure array never gets longer than 10
        if (temporaryArray.length === 11) {
            temporaryArray.pop();
        }


        setArrayOfItems(temporaryArray);
        inputRef.current.value = "";
    }

    function handleInputChange(e) {
        setInputText(inputRef.current.value)
    }

    return (
        <div>
            <form onSubmit={e => addNewItem(e)}>
                <label>Write something and add: </label>
                <input ref={inputRef} type="text" onChange={handleInputChange} />
                <button type="submit">Add Item</button>
            </form>

            <ol>
                {arrayOfItems.map((item, i) => {
                    return (
                        <li key={i}>{item}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default RecentlyUsedComponent;