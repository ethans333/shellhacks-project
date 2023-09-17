import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import Chat from "./Chat.jsx";
import Learn from "./Learn.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Onboarding from "./Onboarding.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
