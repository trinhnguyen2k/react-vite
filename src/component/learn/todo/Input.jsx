import { useState } from "react";

let Input = (props) => {
    // const { handleClick } = props;
    // useState hook + react, [variable A, setter/getter -> cap nhat variable A]
    // setValueInput -> la 1  function de cap nhat du lieu cua bien valueInput
    // erict la gia tri mac dinh

    const [valueInput, setValueInput] = useState("eric");
    const handleOnChange = (text) => {
        setValueInput(text);
    }

    const handleClick = (text) => {
        console.log("check value input: ", text);
        alert(text)
    }
    return (
        <>
            <div className='input-text'>
                <input
                    type="text" placeholder='Enter your text'
                    onChange={(event) => handleOnChange(event.target.value)}
                />
                <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(valueInput)}
                >Add</button>
                <div>
                    <p>My text input is {valueInput}</p>
                </div>
            </div>
        </>
    )
}

export default Input;