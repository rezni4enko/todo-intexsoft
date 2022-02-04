import React from "react"
import TodoInput from "./UI/input/TodoInput";
import TodoSelect from "./UI/Select/TodoSelect";
import './TodoFilter.scss'

const TodoFilter = ({ filter, setFilter }) => {

   return <div className="wrapper-filter">
      <TodoInput
         className='search-input'
         placeholder='Search'
         value={filter.query}
         onChange={e => setFilter({ ...filter, query: e.target.value })} />
      <TodoSelect
         defaultValue='filter'
         value={filter.sort}
         onChange={item => setFilter({ ...filter, sort: item })}
         option={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по содержанию' }]} />
   </div>
}

export default TodoFilter