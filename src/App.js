import { useState, useEffect } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
import React from 'react'

/* import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./components/Login" */
  function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks ] = useState([ ])

    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }

      getTasks()
    }, [])

  /*   //Password
    <BrowserRouter>
    <Login />
    </BrowserRouter> */

    //fetch data
    const fetchTasks = async () =>{
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      return data
    }

     //fetch Tasks
     const fetchTask = async (id) =>{
      const res = await fetch(`http://localhost:3000/tasks/${id}`)
      const data = await res.json()

      return data
    }

  //Task Hinzufügen
    const addTask = async (task) => {
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      setTasks([...tasks, data])
    }

  //Tasks löschen
  const deleteTask =async(id) => {
    await fetch(`http://localhost:3000/task/${id}`,{
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Erinerung
  const toggleCompleted = async (id) =>{
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,
    completed: !taskToToggle.completed} 

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => 
      task.od === id? {...task, completed : 
        data.completed } : task
)
)
      }
  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} 
     showAdd={showAddTask}
     />
     {showAddTask && <AddTask onAdd={addTask}
     />}
     <AddTask onAdd={addTask}
     />
     {tasks.length > 0?(<Tasks tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleCompleted} />
     ):(
      'No Tasks to show'
     )}
      
    </div>
  
  )
}

export default App
