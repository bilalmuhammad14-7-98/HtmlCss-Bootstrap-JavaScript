import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import ProductDetail from "../views/ProductDetail";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import PostAd from "../views/PostAd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/productDetail/:id",
    element: <ProductDetail />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/postAd",
    element: <PostAd />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
