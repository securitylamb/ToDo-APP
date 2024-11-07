// export function Todo({todos = []}){ // setting a default empty array 
//     return <div>
//        {
//        todos.map(function(todo){
//         return <div>
//             <h1>{todo.title}</h1>
//             <h2>{todo.description}</h2>
//             <button>{todo.completed == true ? "completed" : "mark as completed"}</button>
//         </div>
//        })}
//     </div>
// }

export function Todo({ todos = [] }) {  // Set a default empty array
    return (
        <div>
            {todos.map(function(todo, index) {
                return (
                    <div key={index}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed ? "completed" : "mark as completed"}</button>
                    </div>
                );
            })}
        </div>
    );
}
