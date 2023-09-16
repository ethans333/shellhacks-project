import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import Chat from "./Chat.jsx";
import Budget from "./Budget.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/budget",
    element: <Budget />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
