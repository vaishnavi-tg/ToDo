import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)


    const handleCreateTodo = (async () => {

        const response = await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                completed: completed
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        alert("Todo created")

    })
    return (
        <div>
            <input style={{
                padding: 10,
                margin: 10,
                border: 10,
                borderBlock:20,
                borderColor:"black",
            }} type="text" value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} placeholder="Title"></input><br></br>
            <input style={{
                padding: 10,
                margin: 10,
                border: 10,
                borderBlock:20,
                borderColor:"black",
            }} type="text" value={description} onChange={(e) => {
                setDescription(e.target.value)
            }} placeholder="Description"></input><br></br>

            <button onClick={handleCreateTodo} style={{
                padding: 10,
                margin: 10,
                border: 10,
                borderColor:"black",
                cursor:"pointer"
            }}>Add a Todo</button>

        </div>
    )
}



