import { useState } from "react"

function App() {
  const [details,setDetails] = useState([
    { "name": "Chris", "age": 23, "city": "New York" },
    { "name": "Emily", "age": 19, "city": "Atlanta" },
    { "name": "Joe", "age": 32, "city": "New York" },
  ]);
  
  return (
    <div>
        {
        details.map((item,index) => (
            <ToDO key={index} name={item.name} age={item.age} city={item.city} />
        ))
    }
    <button onClick={()=>{
        setDetails([...details,{ "name": "Joe", "age": 32, "city": "New York" }])
        }}>
            Add
    </button>
   </div>
  )
}
  function ToDO(props){
    return (
        <div>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h2>{props.city}</h2>
        </div>
    )
  }

 

export default App
