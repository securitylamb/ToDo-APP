import { useState } from "react";

export function CreateTodo(){

// we can state to send data which is not the 100 accurate way if sending the data but it works
    // istead use react query 
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    return (
        <div style={{
            width: '300px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            textAlign: 'center'
        }}>
            <input type="text" placeholder="Title" onChange={(e)=>{
                const value = e.target.value;
                setTitle(value);
            }} /><br /><br />
            <input type="text" placeholder="Description" onChange={
                function(e){
                    const value = e.target.value;
                    setDescription(value);
                }
            } /><br /><br />
            <button onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title: title,
                        description: description,
                    }),
                    headers:{
                        "Content-Type": "application/json"
                    }
                }).then(async function(res){
                    const json = await res.json();
                    alert("Todo added");
                })
            }}>Add a Todo</button>
        </div>
    );
}
