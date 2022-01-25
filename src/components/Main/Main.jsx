import React, { useState } from "react";
import m from './main.module.css'

const Main = () => {

   const [text, setText] = useState(0)
   const [value, setValue] = useState({ isMode: false, text: 'Text default' })

   function changeValue(e) {
      setValue({ ...text, text: e.target.value })
   }
   function growUp() {
      setText(text + 1)
   }
   const growDown = () => {
      setText(text - 1)
   }

   return <div className={m.wrapper}>
      <div>{value.text}</div>
      <input type="text"
         value={value.text}
         onChange={changeValue} />
      <h1>{text}</h1>
      <button onClick={growUp}>Up</button>
      <button onClick={growDown}>Down</button>
   </div>
}

export default Main;