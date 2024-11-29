import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
)
