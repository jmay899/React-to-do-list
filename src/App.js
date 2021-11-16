import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      "id": 1,
      "text": "Doctor's Appointment",
      "day": "2021-11-17T19:30:00.000Z",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Shopping Trip",
      "day": "2021-11-18T20:30:00.000Z",
      "reminder": false
    },
    {
      "text": "Oil Change",
      "day": "2021-11-19T15:30:00.000Z",
      "reminder": false,
      "id": 4
    },
  ])

  //Delete Task
  const deleteTask = async(id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = async(id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  //Add task
  const addTask = async(task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header 
          title="To-do List" 
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route 
            path='/'
            exact
            element={(
              <>
                {showAddTask && <AddTask onAdd={addTask}/>}
                {tasks.length > 0 ? (
                  <Tasks 
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onToggle={toggleReminder} 
                  /> 
                  ) : (
                    "No tasks. Press \"Add Task\" to create one."
                  )
                }
              </>
            )}
          />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;