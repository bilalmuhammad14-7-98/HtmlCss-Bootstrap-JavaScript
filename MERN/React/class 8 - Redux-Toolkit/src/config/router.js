import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import AboutUs from "../views/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/about-us",
    element: <AboutUs />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
