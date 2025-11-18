import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import About from "../pages/About";
import ResetPassword from "../pages/ResetPassword";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/skillData.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: '/resetPassword',
        Component: ResetPassword
      }
    ],
  },
]);

export default router;
