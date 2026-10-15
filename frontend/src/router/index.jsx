import { createBrowserRouter } from "react-router-dom";
import Default from "../layouts/Default";
import Userlayout from "../layouts/UserLayout"
import { ApplicationForm, Home, Login, Register } from "../pages";
import NotFoundView from "../pages/View404/NotFoundView";
import WelcomeView from "../pages/WelcomeView/WelcomeView";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/application-form",
    element: <Default />,
    children: [
      {
        path: "/application-form",
        element: <ApplicationForm />,
      },
    ],
  },
  {
   path: "/user",
   element: <Userlayout/>,

  },
  {
    path: "*",
    element: <NotFoundView />,
  },
]);
