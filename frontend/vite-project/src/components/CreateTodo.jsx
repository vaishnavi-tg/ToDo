export function CreateTodo(){
    return(
        <div>
            <input style={{
                padding:10,
                margin:10,
                border:10
                }}type="text" placeholder="Text"></input><br></br>
            <input style={{
                padding:10,
                margin:10,
                border:10
                }} type="text" placeholder="Description"></input><br></br>

            <Button style={{
                padding:10,
                margin:10,
                border:10
                }}Add a Todo/>

        </div>
    )
}