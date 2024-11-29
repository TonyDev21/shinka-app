import { createBrowserRouter } from "react-router-dom"
import App from "../templates/App"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import Cursos from "../pages/Cursos"
import Planes from "../pages/Planes"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement:<Error404/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "home",
                element:<Home/>
            },
            {
                path: "cursos",
                element:<Cursos/>
            },
            {
                path: "planes",
                element:<Planes/>
            }
        ]
    }
])

export default router