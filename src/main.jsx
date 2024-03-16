import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App.jsx';

import './index.scss'
import { CurrentCar } from './components/Card.jsx';
import { CarsCatalog } from './components/CarsCatalog/CarsCatalog.jsx';

const router = createHashRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <CarsCatalog />,
      },
      {
        path: 'cars/:id',
        element: <CurrentCar />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
