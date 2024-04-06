import { getYearTasks } from "../helpers/getYearTasks"

const Year = ({ tasks }) => {

  const yearTasks = getYearTasks(tasks)


  return (
    <section className='p-4'>
      {
        yearTasks.map(year => (
          <div key={year.id} className="border border-black rounded bg-gray04 p-2 text-left mb-2 flex justify-between gap-2">
            <div className="bg-gray05 p-1 rounded min-w-[98px] text-center h-fit">
              <span className="text-4xl">
                {year.year}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 justify-end">
              {
                year.tasks.map(task => (
                  <span key={task.id} className="border border-black px-2 rounded bg-gray03 inline-block h-fit">
                    {task.tasks}
                  </span>
                ))
              }
            </div>
          </div>
        ))
      }
</section>
  )
}

export default Year
