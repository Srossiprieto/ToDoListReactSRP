import Options from "./Options"
import { taskDone } from "../helpers/taskDone"


const Task = ({item, tasks, setTasks }) => {
  
  const handleDone = (e) => {
    setTasks(taskDone(item.id, tasks)) // cumplida o no 
  }
  
  return (

      <div className="flex justify-between gap-4 items-center my-4">
        <span className="cursor-pointer flex items-center">
          <input
          className='checkbox' 
          type='checkbox'
          onClick={e => handleDone(e)}
          defaultChecked={item.done}  // si esta cumplida
          />
        </span>
        <p className="grow text-left">
          {item.tasks}
        </p>

        <span className="cursor-pointer">
          <Options 
          idTask={item.id} 
          tasks={tasks} 
          setTasks={setTasks} 
          />
        </span>

      </div>
  )
}

export default Task
