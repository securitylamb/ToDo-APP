import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/Createtodo'
import { Todo } from './component/Todo'

function App() {

  const [todos,setTodos] = useState([]);
/**
 * well the below code re run infiite so bettwe is using useeffect
 */
  //   fetch("http://localhost:3000/todos").then(async function(res){
  //   const json = await res.json();
  //   console.log(json.todofind);
  //   setTodos(json.todofind);
  // })
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todofind);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, [todos]); // Re-run when `todos` changes
  
  return (
  <div>
    <CreateTodo></CreateTodo>
    <Todo todos={todos}></Todo>
  </div>
  )
}

export default App
