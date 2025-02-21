
let TodoData = (props) => {
     const { todoList, deleteTodo } = props


     return (
          <>
               <div className="todo-data">
                    {todoList.map((item) => {
                         return (
                              <div className="todo-item" key={item.id}>
                                   <div>
                                        {item.name} {item.id}


                                   </div>
                                   <button
                                        onClick={() => {
                                             deleteTodo(item.id);
                                        }}
                                   >Delete</button>
                              </div>
                         )
                    })}
               </div>
          </>
     )
}
export default TodoData;