import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";
import './Navbar.css'

const Navbar = () => {

   const { isLogin, setIsLogin } = useContext(AuthContext)
   const singOut = () => {
      setIsLogin(false)
      localStorage.clear()
   }

   return <div className="navbar">
      {isLogin &&
         <>
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/" onClick={singOut}>Sing out</Link>
         </>
      }
   </div >
}

export default Navbar