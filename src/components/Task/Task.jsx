import React from "react";
import { useNavigate } from "react-router-dom";
import TodoButton from "../UI/button/TodoButton";
import t from './task.module.css'

const Task = (props) => {

   const deleteTask = () => {
      props.removeTask(props.task)
   }
   const navigate = useNavigate()

   return <div className={t.wrapper}>
      <div className={t.taskNumber}>{props.id}.</div>
      <div>
         <div className={t.title}>{props.task.title}</div>
         <div className={t.text}>{props.task.body}</div>
      </div>
      <div className={t.wrapperTodoButton}>
         <TodoButton
            className={t.TodoButton}
            onClick={() => { navigate(`/posts/${props.id}`) }}
         >About task</TodoButton>
         <TodoButton
            className={t.TodoButton}
            onClick={deleteTask}>delete</TodoButton>
      </div>
   </div >
}

export default Task;