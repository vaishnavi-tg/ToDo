import { useEffect, useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
  const [todos, setTodos] = useState([])


  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await fetch("http://localhost:3000/todos", {
        method: "GET"
      })

      const data = await todos.json()
      setTodos(data.todos)
    }
    fetchTodos()
  }, [todos])
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />

    </div>
  )
}




export default App