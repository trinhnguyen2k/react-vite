
let TodoData = (props) => {
     const { todoList } = props
     console.log("check props todo", todoList)

     return (
          <>
               <div className="todo-data">
                    {todoList.map((item, index) => {
                         return (
                              <div className="todo-item">
                                   <div>
                                        {item.name}
                                   </div>
                                   <button>Delete</button>
                              </div>
                         )
                    })}
                    <div>
                         {JSON.stringify(todoList)}
                    </div>
               </div>
          </>
     )
}
export default TodoData;