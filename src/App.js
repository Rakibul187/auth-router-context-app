import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoutes from './routes/PrivateRoutes';
import Orders from './Components/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/orders', element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
        },
        {
          path: '/home', element: <PrivateRoutes> <Home></Home></PrivateRoutes>
        },
        {
          path: '/login', element: <Login></Login>
        },
        {
          path: '/register', element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
