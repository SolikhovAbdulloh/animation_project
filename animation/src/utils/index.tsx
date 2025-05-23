import Lessons from "../pages/darslar";
import Home from "../pages/home";
import About from "../pages/o'zim_haqimda";
import Students from "../pages/shogirtlar";
import { PagesType } from "../types";
import Call from "../pages/murojat";

export const pages: PagesType[] = [
  {
    pages: "/",
    component: <Home />,
    title: "Bosh sahifa",
  },
  {
    pages: "/about",
    component: <About />,
    title: "O'zim haqimda",
  },

  {
    pages: "/students",
    component: <Students />,
    title: " Shogirtlar",
  },
  // {
  //   pages: "/lessons",
  //   component: <Lessons />,
  //   title: "Darslar",
  // },
  {
    pages: "/call",
    component: <Call />,
    title: "Murojaat",
  },
];
