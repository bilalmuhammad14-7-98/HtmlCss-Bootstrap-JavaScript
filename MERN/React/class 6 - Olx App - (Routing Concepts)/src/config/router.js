import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import ProductDetail from "../views/ProductDetail";
import Login from "../views/Login";

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
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
