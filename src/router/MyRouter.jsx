import Login from "../components/login/Login"
import Todo from "../components/Todo/Todo"
import TaskPage from "../components/TaskPage"

export const MyRouter = [
   { path: '*', element: <Todo /> },
   { path: '/posts/:id', element: <TaskPage /> },
]

export const MyPrivateRouter = [
   { path: '/login', element: <Login /> },
   { path: '*', element: <Login /> },
]