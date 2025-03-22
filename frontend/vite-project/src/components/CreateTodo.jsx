export function CreateTodo(){
    

    const handleCreateTodo = (async ()=>{
        const response = await fetch("http://localhost:3000/todo",{
            method:POST,
            
        })
    })
    return(
        <div>
            <input style={{
                padding:10,
                margin:10,
                border:10
                }}type="text" placeholder="Title"></input><br></br>
            <input style={{
                padding:10,
                margin:10,
                border:10
                }} type="text" placeholder="Description"></input><br></br>

            <button onClick={handleCreateTodo} style={{
                padding:10,
                margin:10,
                border:10
                }}>Add a Todo</button>

        </div>
    )
}



