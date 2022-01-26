import React, { useMemo, useState } from "react";
import t from './todo.module.css'
import TaskForm from "../TaskForm";
import TaskList from "../Task/TaskList";

const Todo = () => {

   const [todo, setTodo] = useState([
      { id: 1, title: 'first', text: 'bbbb' },
      { id: 2, title: 'second', text: 'aaa' },
      { id: 3, title: 'third', text: 'ccc' },
   ])

   const [filter, setFilter] = useState({ sort: '', query: '' })

   const sortedListTask = useMemo(() => {
      if (filter.sort) {
         return [...todo].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return todo
   }, [filter.sort, todo])

   const sortedAndSearchedListTask = useMemo(() => {
      return sortedListTask.filter(value => value.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()) ||
         value.text.includes(filter.query.toLocaleLowerCase()))
   }, [filter.query, sortedListTask])

   const createTask = (newTask) => {
      setTodo([...todo, newTask])
   }

   const removeTask = (task) => {
      setTodo(todo.filter(item => item.id !== task.id))
   }

   return <div className={t.todowrapper}>

      <TaskForm create={createTask}
         todo={todo}
         removeTask={removeTask}
         filter={filter}
         setFilter={setFilter}
      />
      <TaskList
         removeTask={removeTask}
         todo={sortedAndSearchedListTask}
      />
   </div>
}

export default Todo;