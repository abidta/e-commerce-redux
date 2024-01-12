import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider as ReduxProvider } from 'react-redux'
import './index.css'
import { store } from './redux/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './pages/Admin.jsx'
import { Provider } from 'urql'
import { client } from './api/graphql.js'
// import { client } from './api/apollo.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider value={client}>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </Provider>
  </React.StrictMode>
)
