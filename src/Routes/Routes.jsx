import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./Layouts/MainLayOut";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Blog from "../Pages/Blog";
import ErrorPage from "../Pages/ErrorPage";
import ContactUs from "../Pages/ContactUs";
import Services from "../Pages/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/contactUs",
        element: (
          <PrivateRoute>
            <ContactUs></ContactUs>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
