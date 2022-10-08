import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import getRootRoutes from './routes'

const rootRouter = createBrowserRouter(getRootRoutes());

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={rootRouter} />
  </React.StrictMode>,
  document.getElementById('root'),
);
