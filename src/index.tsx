import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from './redux'
import getRootRoutes from './routes'

const rootRouter = createBrowserRouter(getRootRoutes());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={rootRouter} />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
