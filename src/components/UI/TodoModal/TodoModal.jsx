import React from "react";
import m from './TodoModal.module.css'

const TodoModal = ({ children, visible, setVisible }) => {

   const rootClasses = [m.todoModal]
   if (visible) {
      rootClasses.push(m.active)
   }

   return <div className={rootClasses.join(' ')} onClick={() => { setVisible(false) }}>
      <div className={m.todoModalContent} onClick={e => { e.stopPropagation() }}>
         {children}
      </div>

   </div>
}

export default TodoModal