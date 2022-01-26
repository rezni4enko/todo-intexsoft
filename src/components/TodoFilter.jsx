import React from "react"
import TodoInput from "./UI/input/TodoInput";
import TodoSelect from "./UI/Select/TodoSelect";


const TodoFilter = ({ filter, setFilter }) => {

   return <div>
      <TodoInput
         placeholder='Search'
         value={filter.query}
         onChange={e => setFilter({ ...filter, query: e.target.value })} />
      <TodoSelect
         defaultValue='filtr'
         value={filter.sort}
         onChange={item => setFilter({ ...filter, sort: item })}
         option={[
            { value: 'title', name: 'по названию' },
            { value: 'text', name: 'по содержанию' }]} />
   </div>
}

export default TodoFilter