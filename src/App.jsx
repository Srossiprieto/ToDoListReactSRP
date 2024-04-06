import './App.css'
import Header from './components/Header'
import { useEffect, useState } from 'react'

import Form from './components/Form'
import ListTask from './components/ListTasks'

import Day from './components/Day'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'




function App() {
  const [dateM, setDateM] = useState(new Date())
  
  const data = JSON.parse(localStorage.getItem('tasks'))


  // si data existe renderiza y sino un array vacio
  const [tasks, setTasks] = useState(data? data : [])
  
  
  // console.log(tasks);

  // funcionalidad del menu
  const [tab, setTab] = useState('day')


  // guardar en local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])




  
  
  
  return (
    <main>
      <h1 className='text-4xl text-red01'>To Do List</h1>
      <div className="bg-gray03 text-white rounded max-w-[600px] m-auto">
        <Header tab={tab} setTab={setTab}/>
        {
          tab === 'day' && 
          <>
            <Day dateM={dateM} setDateM={setDateM}/> 
            <Form 
              dateM={dateM} 
              tasks={tasks} 
              setTasks={setTasks} 
            /> 
            <ListTask
              tasks={tasks}
              setTasks={setTasks}
              dateM={dateM} 
            />
          </>
        }
        {
          tab === 'week' && 
          <Week tasks={tasks}/>
        }
        {
          tab === 'month' && 
          <Month tasks={tasks}/>
        }
        {
          tab === 'year' && 
          <Year tasks={tasks}/>
        }

      </div>
    </main>
  )
}

export default App
