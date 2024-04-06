import { deleteTasks } from "../helpers/deleteTasks";


const Popup = ({idTask, tasks, setTasks }) => {


  const handleDelete = (tasks, idTask, e) => {
    e.stopPropagation() // para que no se propague el evento evitando conflictos 
    console.log('popup');
    setTasks(deleteTasks(tasks, idTask))
  }

  return (
    <div 
      className='popup-delete bg-gray06 p-2 rounded absolute right-0 top-[25px] w-[100px] z-10'
    >
      <p
        onClick={e=>handleDelete(tasks, idTask, e)}
      >Delete task</p>
    </div>
  )
}

export default Popup
