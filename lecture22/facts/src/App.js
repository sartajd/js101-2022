import React, { createContext, useState } from "react";

import style from "./index.css"

import ThemeContext from "./themeContext";

// components
import Task from "./components/task"
import TasksList from "./components/tasksList";

function App() {
  const [response, setResponse] = useState("")
  const [tasks, setTasks] = useState([])

  const [theme, setTheme] = useState("light")

  const handleChange = event => {
    setResponse(event.target.value)
  }

  const toggleTheme = event => {
    setTheme(event.target.value)
  }

  const addTask = () => {
    // get value from input
    // add it to tasks
    setTasks([...tasks, response])
    setResponse("")
  }

  return (
    <ThemeContext.Provider value={theme}>
    <div className={"app " + theme}>
      <h1>Tasks </h1>
      <select onChange={toggleTheme} >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <hr />
      <TasksList tasks={tasks}/>

      <input onChange={handleChange} placeholder="add new task" value={response}/>
      <button onClick={addTask}>Add</button>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
