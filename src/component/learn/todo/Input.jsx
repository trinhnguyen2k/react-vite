let Input = (props) => {
    const { callName } = props;
    // callName("tristian");
    return (
        <>
            <div className='input-text'>
                <input type="text" placeholder='Enter your text' />
                <button>Add</button>
            </div>
        </>
    )
}

export default Input;