import Input from './component/learn/todo/Input';
import './component/learn/todo/todo.css';
import TodoData from './component/learn/todo/TodoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const [todoList, setTodo] = useState([]);

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
      {/* {todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&
        <div className="todo-image">
          <img className='logo' src={reactLogo} />
        </div>
      } */}
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
        />
        :
        <div className="todo-image">
          <img className='logo' src={reactLogo} />
        </div>

      }
    </div>

  )
}

export default App
