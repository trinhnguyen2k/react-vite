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

  const callName = (name) => {
    return alert(`Call me: ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <Input
        callName={callName}
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
