import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import Movie from './pages/Movie';

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': any,
      'swiper-slide': any,
    }
  }
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Series",
    element: <Home/>,
  },
  {
    path: "/Games",
    element: <Home/>,
  },
  {
    path: "/Books",
    element: <Home/>,
  },
  {
    path: '/Movie/:id',
    element: <Movie/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
