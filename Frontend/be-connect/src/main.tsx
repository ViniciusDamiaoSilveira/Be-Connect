import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import ListMovies from './Pages/MovieList';
import ListMoviesGenre from './Pages/MoviesByGender';

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
    path: "/Jogos",
    element: <Home/>,
  },
  {
    path: "/Livros",
    element: <Home/>,
  },
  {
    path: "/Filme/:id",
    element: <Movie/>,
  },
  {
    path: "/Filmes/:type",
    element: <ListMovies/>,
  },
  {
    path: "/Filmes/:genreWrite/:genre",
    element: <ListMoviesGenre/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
