import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import ProductDetail from "../views/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/productDetail",
    element: <ProductDetail />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
