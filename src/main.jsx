import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import { App } from './App.jsx';
import './index.scss'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { FormPage } from './components/Pages/FormPage/FormPage.jsx';
import { EditPage } from './components/Pages/EditPage/EditPage.jsx';
import { HomePage } from './components/Pages/HomePage/HomePage.jsx';
import { CarsCatalog } from './components/Pages/CatalogPage/CarsCatalog.jsx';
import { CarRecord } from './components/Pages/CardPage/CarRecord.jsx';




const router = createHashRouter([
  {
    path:'/',
    element: <App/>,
    // errorElement: <p>Oops, something went wrong</p>,
    children: [
      {
        path:'/',
        element: <HomePage />
      },
      {
        path: 'cars',
        element: <CarsCatalog />,
      },
      {
        path: 'cars/:id?',
        element: <CarRecord/>,
      },
      {
        path: 'cars/:id/editform',
        element: <EditPage />
      },
      {
        path: 'form',
        element: <FormPage />
      },
    ]
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>
)
