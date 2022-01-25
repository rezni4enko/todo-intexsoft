import React from "react";
import t from './TodoButton.module.css'

const TodoButton = ({ children, ...props }) => {
   return <button {...props} className={t.button}>
      {children}
   </button >
}

export default TodoButton;