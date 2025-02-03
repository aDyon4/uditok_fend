import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Uditok from './pages/Uditok';
import Szerkeszt from './pages/Szerkeszt';
import Nevjegy from './pages/Nevjegy';
import Notfound from './Notfound';
function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    { element: <Layout />, children: [
      { path: "/", element: <Uditok /> },
      { path: "/szerkeszt", element: <Szerkeszt /> },
      { path: "/nevjegy", element: <Nevjegy /> },
      { path: "*", element: <Notfound /> }
    ]}
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
