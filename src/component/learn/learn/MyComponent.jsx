// component = html + css +
import './style.css';

const printObject = {
    name: "tristian",
    age: 25
}
const MyComponent = () => {
    return (
      <>
            <div> {JSON.stringify(printObject)} + Thuc hanh component - tris </div>
            <div> {console.log("In Ra Console Log")} </div>
            <div className='child'
                style= {{backgroundColor: "bisque"}}
            >child</div>
      </>
  )
}

export default MyComponent;