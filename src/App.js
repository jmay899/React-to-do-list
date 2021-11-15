import React, { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: "Doctor's Appointment",
        day: "Nov 15th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "School Meeting",
        day: "Nov 16th at 8:30am",
        reminder: true,
    },
    {
        id: 3,
        text: "Shopping Trip",
        day: "Nov 16th at 3:30pm",
        reminder: false,
    }
])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
     setTasks(tasks.map((task) => task.id===id ? 
     {...task, reminder: !task.reminder} : task))
  }

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title="To-do List" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      : "No tasks. Press \"Add Task\" to create one."}
    </div>
  );
}

export default App;