import React, { useEffect, useState } from "react";
import t from './todo.module.css'
import TaskForm from "../TaskForm";
import TaskList from "../Task/TaskList";
import TodoModal from "../UI/TodoModal/TodoModal";
import TodoFilter from "../TodoFilter";
import TodoButton from "../UI/button/TodoButton";
import { useTask } from "../../hooks/useTask";
import { fetchPosts } from "../../api/todoApi";


const Todo = () => {

   const [todo, setTodo] = useState([
      // { id: 1, title: 'first', body: 'bbbb' },
      // { id: 2, title: 'second', body: 'aaa' },
      // { id: 3, title: 'third', body: 'ccc' },
   ])

   useEffect(() => { addPosts() }, [])

   const [filter, setFilter] = useState({ sort: '', query: '' })

   const [modal, setModal] = useState(false)
   const sortedAndSearchedListTask = useTask(filter.query, todo, filter.sort)

   const addPosts = () => {
      fetchPosts().then(data => setTodo(data))
   }

   const createTask = (newTask) => {
      setTodo([...todo, newTask])
      setModal(false)
   }

   const removeTask = (task) => {
      setTodo(todo.filter(item => item.id !== task.id))
   }

   return <div className={t.todowrapper}>
      <TodoButton onClick={() => setModal(true)}>Add user</TodoButton>
      <TodoModal visible={modal} setVisible={setModal}>
         <TaskForm create={createTask}
            todo={todo}
            removeTask={removeTask}
            filter={filter}
            setFilter={setFilter}
         />
      </TodoModal>
      <TodoFilter
         filter={filter}
         setFilter={setFilter} />
      <TaskList
         removeTask={removeTask}
         todo={sortedAndSearchedListTask}
      />

   </div>
}

export default Todo; 