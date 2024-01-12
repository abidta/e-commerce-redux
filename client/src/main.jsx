import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux/store.js'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Admin from './pages/Admin.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>

},
{
  path:'/admin',
  element:<Admin/>
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
