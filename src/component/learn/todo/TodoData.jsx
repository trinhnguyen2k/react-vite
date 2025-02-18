
let TodoData = (props) => {
     const { name, address, province } = props
     return (

          <>
               <div className="todo-data">
                    <div> My name is {name}</div>
                    <div> Learning react</div>
                    <div> Learning Java</div>
               </div>
          </>
     )
}
export default TodoData;