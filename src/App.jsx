import Input from './component/learn/todo/Input';
import './component/learn/todo/todo.css';
import TodoData from './component/learn/todo/TodoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const [todoList, setTodo] = useState([
    { id: 1, name: "Learning react" },
    { id: 2, name: "Learning Java" },
  ]);


  const name = "Tristian";
  const age = 25;
  const address = {
    province: "Binh Thuan",
    addressNumber: 86
  };

  const addNewTodo = (todo) => {
    const newTodo = {
      id: randomIntfromInterval(1, 100000),
      name: todo
    }
    setTodo([...todoList, newTodo])
  }


  const randomIntfromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <Input
        addNewTodo={addNewTodo}

      />
      <TodoData
        name={name}
        age={age}
        address={address}
        todoList={todoList}
      />
      <div className="todo-image">
        <img className='logo' src={reactLogo} />
      </div>

    </div>

  )
}

export default App
