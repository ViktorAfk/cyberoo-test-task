import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App.jsx';

import './index.scss'

const router = createHashRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: 'cars/:id'
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
