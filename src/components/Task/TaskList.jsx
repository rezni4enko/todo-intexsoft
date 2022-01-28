import React from "react"
import { TransitionGroup } from "react-transition-group";
import Task from "./Task";
import t from './task.module.css'


const TaskList = ({ todo, removeTask }) => {

   return <div className={t.taskList}> {todo.length
      ?
      todo.map((task, index) =>
         <Task
            task={task}
            id={index + 1}
            removeTask={removeTask}
            key={task.id} />)

      : <h1>Tasks not found</h1>
   }</div>
}

export default TaskList