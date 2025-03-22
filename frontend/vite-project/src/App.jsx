import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App(){
  const todos=[{
    title:"Wake up",
    description:"At 4 am",
    completed:false
    },{
      title:"Go to gym ",
      description:"Gym at 8 am",
      completed:true
    }]
  return(
    <div>
      <Todos todos={todos}/>
      <CreateTodo/>
    </div>
  )
}




export default App