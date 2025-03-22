export function Todos({ todos }) {

    return (
        <div>
            {todos.map((todo) => (
                <>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <h2>{todo.completed?"Completed":"Mark as Done!"}</h2>
                </>
            ))}
        </div>
    )
}