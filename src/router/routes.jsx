import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import LocationDetail from '../pages/LocationDetail'
import MapPage from '../pages/MapPage'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'map',
        element: <MapPage />,
      },
      {
        path: 'locations/:id',
        element: <LocationDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
