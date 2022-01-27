import React, { useState } from "react"
import TodoFilter from "./TodoFilter";
import TodoButton from "./UI/button/TodoButton";
import TodoInput from "./UI/input/TodoInput";


<<<<<<< HEAD
const TaskForm = ({ create, todo, sortTodo }) => {
=======
const TaskForm = ({ create, todo, sortTodo, filter, setFilter }) => {
>>>>>>> second
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
      <hr style={{ margin: '20px' }} />
<<<<<<< HEAD
      <TodoFilter sortTodo={sortTodo} />
=======
      <TodoFilter
         sortTodo={sortTodo}
         filter={filter}
         setFilter={setFilter} />
>>>>>>> second
   </div>
}

export default TaskForm