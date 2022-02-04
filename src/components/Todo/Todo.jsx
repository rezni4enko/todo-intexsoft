import React, { useEffect, useState } from "react";
import t from './todo.module.css'
import TaskForm from "../TaskForm";
import TaskList from "../Task/TaskList";
import TodoModal from "../UI/TodoModal/TodoModal";
import TodoFilter from "../TodoFilter";
import TodoButton from "../UI/button/TodoButton";
import { useTask } from "../../hooks/useTask";
import { fetchPostsApi } from "../../api/todoApi";
import CircularProgress from '@mui/material/CircularProgress';
import { useFetching } from "../../hooks/useFetching";
import { getPagesCount } from "../../utils/pages";
import '../../App.scss'

const Todo = () => {
   const [todo, setTodo] = useState([ /* { id: 1, title: 'first', body: 'bbbb' }*/])
   const [filter, setFilter] = useState({ sort: '', query: '' })
   const [modal, setModal] = useState(false)
   const sortedAndSearchedListTask = useTask(filter.query, todo, filter.sort)
   const [totalPage, setTotalPage] = useState(0)
   const [limit, setLimit] = useState(10)
   const [page, setPage] = useState(1)

   const [fetchPosts, isLoadingPosts, errorPost] = useFetching(async () => {
      const response = await fetchPostsApi(limit, page)
      setTodo(response.data)
      const countPosts = response.headers['x-total-count']
      setTotalPage(getPagesCount(countPosts, limit))
   })

   useEffect(() => { fetchPosts() }, [])

   const createTask = (newTask) => {
      setTodo([...todo, newTask])
      setModal(false)
   }
   const arrPages = []
   for (let i = 1; i <= totalPage; i++) {
      arrPages.push(i)
   }
   const changePage = (page) => {
      setPage(page)
      fetchPosts()
   }

   const removeTask = (task) => {
      setTodo(todo.filter(item => item.id !== task.id))
   }

   return <div className={t.todowrapper}>

      <TodoButton onClick={() => setModal(true)}>Add task</TodoButton>
      <TodoModal visible={modal} setVisible={setModal}>
         <TaskForm create={createTask}
            todo={todo}
            removeTask={removeTask}
            filter={filter}
            setFilter={setFilter}
         />
      </TodoModal>
      <TodoFilter
         className='todo-filter'
         filter={filter}
         setFilter={setFilter} />
      {errorPost && <h1>Error: {errorPost}</h1>}
      {isLoadingPosts
         ? <CircularProgress />
         : <TaskList
            removeTask={removeTask}
            todo={sortedAndSearchedListTask}
         />
      }
      <div className="wrapper-pages">
         {arrPages.map(element => <span
            onClick={() => changePage(element)}
            key={element}
            className={element === page ? "item-pages item-active" : "item-pages"}>{element}</span>)}
      </div>
   </div>
}

export default Todo; 