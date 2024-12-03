import { createBrowserRouter } from "react-router-dom"
import App from "../templates/App"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import Cursos from "../pages/Cursos"
import Planes from "../pages/Planes"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import PublicRouter from "../router/PublicRouter"
import ProtectedRouter from "../router/ProtectedRouter"
import Dashboard from "../pages/auth/Dashboard"
import Tematica from "../pages/auth/Tematica"
import Courses from "../pages/auth/Courses"
import Rutas from "../pages/auth/Rutas"
import Progreso from "../pages/auth/Progreso"
import Chat from "../pages/auth/Chat"
import Beca from "../pages/auth/Beca"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error404 />,
      children: [
        {
          element: <PublicRouter />,
          children: [
            {
              index: true,
              element: <Home />
            },
            {
              path: "home",
              element: <Home />
            },
            {
              path: "cursos",
              element: <Cursos />
            },
            {
              path: "planes",
              element: <Planes />
            },
            {
              path: "login",
              element: <Login />
            },
            {
              path: "signup",
              element: <SignUp />
            },
          ]
        },
        {
          element: <ProtectedRouter />,
          children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "mis-cursos",
                element: <Courses/>
            },
            {
                path: "mis-rutas",
                element: <Rutas/>
            },
            {
                path: "mi-progreso",
                element: <Progreso/>
            },
            {
                path: "chat",
                element:<Chat/>
            },
            {
                path: "tematicas",
                element: <Tematica/>
            },
            {
                path: "beca",
                element: <Beca/>
            },
            {
              path: "tematica",
              element: <Tematica/>
            },
          ]
        }
      ]
    },
  ]);
  
  export default router;