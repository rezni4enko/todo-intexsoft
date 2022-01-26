import React from "react"
import Task from "./Task";


const TaskList = ({ todo, removeTask }) => {

   return <div> {todo.length
      ? todo.map((task, index) =>
         <Task task={task} id={index + 1} removeTask={removeTask} key={task.id} />)
      : <h1>Tasks not found</h1>
   }</div>
}

export default TaskList