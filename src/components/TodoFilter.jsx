import React, { useState } from "react"
import TodoInput from "./UI/input/TodoInput";
import TodoSelect from "./UI/Select/TodoSelect";


const TodoFilter = ({ sortTodo }) => {

   const [selectedSort, setSelectedSort] = useState('')
   const [seatchQuary, setSeatchQuary] = useState('')

   const sortTask = (sort) => {
      setSelectedSort(sort)
      console.log(sort)
      sortTodo(sort)
   }

   return <div>
      <TodoInput placeholder='Search' value={seatchQuary} onChange={(e) => setSeatchQuary(e.target.value)} />
      <TodoSelect
         defaultValue='filtr'
         value={selectedSort}
         onChange={sortTask}
         option={[
            { value: 'title', name: 'по названию' },
            { value: 'text', name: 'по содержанию' }]} />
   </div>
}

export default TodoFilter