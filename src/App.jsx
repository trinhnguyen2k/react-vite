import Input from './component/learn/todo/Input';
import './component/learn/todo/todo.css';
import TodoData from './component/learn/todo/TodoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './component/layout/header';
import Footer from './component/layout/footer';
const App = () => {
  const [todoList, setTodo] = useState([]);

  const addNewTodo = (todo) => {
    const newTodo = {
      id: randomIntfromInterval(1, 100000),
      name: todo
    }
    setTodo([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    console.log("check id:", id);
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== id)
    setTodo(newTodoList)

  }


  const randomIntfromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <Input
          addNewTodo={addNewTodo}
        />
        {todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
          :
          <div className="todo-image">
            <img className='logo' src={reactLogo} />
          </div>

        }
      </div>
      <Footer />
    </>

  )
}

export default App
