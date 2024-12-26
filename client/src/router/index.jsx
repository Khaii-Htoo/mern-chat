import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import CreateUser from "../pages/CreateUser";
import MessageRoom from "../pages/MessageRoom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/createUser",
      element: <CreateUser/>
    },
    {
      path: "/message",
      element: <MessageRoom/>
    },
  ]);