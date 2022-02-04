import React from "react"
import Task from "./Task";
import t from './task.module.css'

const TaskList = ({ todo, removeTask }) => {

   return <div className={t.taskList}> {todo.length
      ?
      todo.map((task) =>
         <Task
            task={task}
            id={task.id}
            removeTask={removeTask}
            key={task.id} />)
      : <h1>Tasks not found</h1>
   }</div>
}

export default TaskList
