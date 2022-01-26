import React from "react"
import s from './TodoSelect.module.css'


const TodoSelect = ({ option, defaultValue, value, onChange }) => {

   return <select
      className={s.select}
      onChange={e => onChange(e.target.value)}
      value={value}>
      <option value="" disabled={true}>{defaultValue}</option>
      {option.map(option =>
         <option key={option.value} value={option.value}>{option.name}</option>
      )}
   </select>
}

export default TodoSelect