import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../context/context"
import f from './Login.module.css'

const Login = () => {

   const { isLogin, setIsLogin } = useContext(AuthContext)
   const { register, handleSubmit } = useForm()
   const onSubmit = () => {
      localStorage.setItem('login', '12345678')
      setIsLogin(true)
   }

   return <form
      onSubmit={handleSubmit(onSubmit)}
      className={f.formWrapper}>
      <input
         {...register("example")}
         className={f.formItem}
         placeholder="email"
         type='text' />
      <input
         {...register("exampleRequired",
            { required: true }
         )}
         className={f.formItem}
         placeholder="password"
         type='password' />

      <input type="submit"
         className={f.formSubmit}
      />
   </form>
}

export default Login