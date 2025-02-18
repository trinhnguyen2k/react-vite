import Input from './component/learn/todo/Input';
import './component/learn/todo/todo.css';
import TodoData from './component/learn/todo/TodoData';
import reactLogo from './assets/react.svg';
const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <Input />
      <TodoData />
      <div className="todo-image">
        <img className='logo' src={reactLogo} />
      </div>

    </div>

  )
}

export default App
