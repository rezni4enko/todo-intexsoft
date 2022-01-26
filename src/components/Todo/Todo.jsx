import React, { useState } from "react";
import t from './todo.module.css'
import TaskForm from "../TaskForm";
import TaskList from "../Task/TaskList";

const Todo = () => {

   const [todo, setTodo] = useState([
      { id: 1, title: 'first', text: 'bbbb' },
      { id: 2, title: 'second', text: 'aaa' },
      { id: 3, title: 'third', text: 'ccc' },
   ])

   const createTask = (newTask) => {
      setTodo([...todo, newTask])
   }

   const removeTask = (task) => {
      setTodo(todo.filter(item => item.id !== task.id))
   }

   // const sortedTodo = [...todo].sort((a, b) => a[sort].localeCompare(b[sort]))
   const sortTodo = (sort) => {
      setTodo([...todo].sort((a, b) => a[sort].localeCompare(b[sort])))
   }

   return <div className={t.todowrapper}>

      <TaskForm create={createTask}
         todo={todo}
         removeTask={removeTask}
         sortTodo={sortTodo}
      />
      <TaskList removeTask={removeTask} todo={todo} />
   </div>
}

export default Todo;