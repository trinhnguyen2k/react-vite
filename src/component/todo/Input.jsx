import { useState } from "react";

let Input = (props) => {
    const { addNewTodo } = props;

    // useState hook + react, [variable A, setter/getter -> cap nhat variable A]
    // setValueInput -> la 1  function de cap nhat du lieu cua bien valueInput
    // erict la gia tri mac dinh

    const [valueInput, setValueInput] = useState("");
    const handleOnChange = (text) => {
        setValueInput(text);
    }

    const handleClick = (text) => {
        addNewTodo(text);
        setValueInput("");

    }
    return (
        <>
            <div className='input-text'>
                <input
                    type="text" placeholder='Enter your text'
                    onChange={(event) => handleOnChange(event.target.value)}
                    value={valueInput}
                />
                <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(valueInput)}
                >Add</button>
            </div>
        </>
    )
}

export default Input;