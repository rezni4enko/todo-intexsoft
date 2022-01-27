import React, { useState } from "react"
import TodoButton from "./UI/button/TodoButton";
import TodoInput from "./UI/input/TodoInput";


const TaskForm = ({ create }) => {
   const [task, setTask] = useState({ title: '', text: '' })


   function addTask(e) {
      e.preventDefault()
      const newTask = {
         ...task,
         id: Date.now(),
      }
      create(newTask)
      setTask({ title: '', text: '' })
   }

   return <div>
      <TodoInput type="text" placeholder="title" value={task.title}
         onChange={e => { setTask({ ...task, title: e.target.value }) }} />
      <TodoInput type="text" placeholder="text" value={task.text}
         onChange={e => { setTask({ ...task, text: e.target.value }) }} />
      <TodoButton onClick={addTask}>Add task</TodoButton>
   </div>
}

export default TaskForm