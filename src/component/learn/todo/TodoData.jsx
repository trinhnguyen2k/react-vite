
let TodoData = (props) => {
     const { name, todoList } = props
     console.log("check props todo", todoList)

     return (
          <>
               <div className="todo-data">
                    <div> My name is {name}</div>
                    <div> Learning react</div>
                    <div> Learning Java</div>
                    <div>
                         {JSON.stringify(todoList)}
                    </div>
               </div>
          </>
     )
}
export default TodoData;