let Input = (props) => {
    const { handleClick, handleOnChange } = props;
    // callName("tristian");


    return (
        <>
            <div className='input-text'>
                <input
                    type="text" placeholder='Enter your text'
                    onChange={(event) => handleOnChange(event.target.value)}
                />
                <button
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}
                >Add</button>
            </div>
        </>
    )
}

export default Input;