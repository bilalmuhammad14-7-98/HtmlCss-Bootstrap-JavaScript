import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import ProductDetail from "../views/ProductDetail";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import PostAd from "../views/PostAd";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UpdateUser from "../views/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/productDetail/:id",
        element: <ProductDetail />,
      },

      {
        path: "/postAd",
        element: <PostAd />,
      },

      {
        path: "/updateUser/:id",
        element: <UpdateUser />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function Layout() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [path, setPath] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user, "user router-------.");
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...

        console.log("user is sign out");
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log(window.location.pathname, "pathname-------");
  //   setPath(window, location.pathname);
  // }, [window.location.pathname]);

  // useEffect(() => {
  //   console.log("if block-----");
  //   const { pathname } = window.location;
  //   console.log(pathname, "pathname=-----");

  //   if (user) {
  //     console.log(user, pathname, "user------");

  //     if (pathname === "/login" || pathname === "/signup") {
  //       console.log(pathname, "inside if else");
  //       navigate("/");
  //     }
  //   } else {
  //     if (pathname === "/postAd") {
  //       navigate("/login");
  //     }
  //   }
  // }, [window.location.pathname, user]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
