import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App, { recipesLoader } from "./components/App/App";
import Error from "./components/Error";
import Recipe from "./components/Recipe";
import Home from "./components/Home";
import "./styles/index.scss";

import store from "./store";
import Favorites, { favLoader } from "./components/Favorites";

//2 routes:
//- Home
//-Recipe
//Layout:
//-App => Menu + Children(Home/Recipe)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: recipesLoader,
    children: [
      { index: true, element: <Home /> },
      { path: "/recipe/:slug", element: <Recipe /> },
      {
        path: "/favorites",
        loader: localStorage.getItem("token") && favLoader,
        element: localStorage.getItem("pseudo") ? (
          <Favorites />
        ) : (
          <Navigate to="/" />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
