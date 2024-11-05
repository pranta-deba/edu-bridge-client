import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/results", element: "results" },
      { path: "/admission", element: "admission" },
      { path: "/about", element: "about" },
      { path: "/contact", element: "contact" },
      { path: "/login", element: "login" },
    ],
  },
]);
