import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../Layout";
import About from "../pages/o'zim_haqimda";
import Call from "../pages/murojat";
import Curses from "../pages/kurslar";
import Students from "../pages/shogirtlar";
import Lessons from "../pages/darslar";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/call",
        element: <Call />,
      },
      {
        path: "/curses",
        element: <Curses />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/lessons",
        element: <Lessons />,
      },
    ],
  },
]);
