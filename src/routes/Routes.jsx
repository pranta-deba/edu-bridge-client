import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: "error",
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);
