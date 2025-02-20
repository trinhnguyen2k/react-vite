import Input from './component/learn/todo/Input';
import './component/learn/todo/todo.css';
import TodoData from './component/learn/todo/TodoData';
import reactLogo from './assets/react.svg';
const App = () => {

  const name = "Tristian";
  const age = 25;
  const address = {
    province: "Binh Thuan",
    addressNumber: 86
  };


  const handleClick = () => {
    alert("hi, click me")
  }
  const handleOnChange = (text) => {
    console.log(">>> check on change: ", text)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <Input
        handleClick={handleClick}
        handleOnChange={handleOnChange}
      />
      <TodoData
        name={name}
        age={age}
        address={address}
      />
      <div className="todo-image">
        <img className='logo' src={reactLogo} />
      </div>

    </div>

  )
}

export default App
