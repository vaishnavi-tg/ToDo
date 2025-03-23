export function Todos({ todos }){

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button style={{
                        border:10,
                        margin:2,
                        borderRadius:10
                    }}>
                        <h6>{todo.completed ? "Completed" : "Mark as Done!"}</h6>
                    </button>
                </div>
            ))}
        </div>
    )
}