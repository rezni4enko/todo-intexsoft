import React from "react";
import TodoButton from "../UI/button/TodoButton";
import t from './task.module.css'

const Task = (props) => {

   const deleteTask = () => {
      props.removeTask(props.task)
   }

   return <div className={t.wrapper}>
      <div>
         <div className={t.title}>{props.task.title}</div>
         <div>{props.task.body}</div>
         <div>{props.id}</div>
      </div>
      <div>
         <TodoButton>change</TodoButton>
         <TodoButton onClick={deleteTask} >delite</TodoButton>
      </div>
   </div >
}

export default Task;