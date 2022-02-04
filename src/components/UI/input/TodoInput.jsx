import React from "react";
import i from './TodoInput.module.css'

const TodoInput = (props) => {
   return <input {...props} className={i.input} />
}

export default TodoInput;