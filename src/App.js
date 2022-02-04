import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { MyRouter, MyPrivateRouter } from './router/MyRouter';
import { AuthContext } from './context/context'
import './App.scss'

function App() {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('login')) { setIsLogin(true) }
  }, [])

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      <div className="wrapper-pages">
        <Navbar />
        <Routes>
          {isLogin
            ? MyRouter.map((r) => <Route
              path={r.path}
              element={r.element}
              key={r.path}
            />)
            : MyPrivateRouter.map((r) => <Route
              path={r.path}
              element={r.element}
              key={r.path}
            />)
          }
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
