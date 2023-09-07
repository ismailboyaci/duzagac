import { routerType } from "../types/router.types";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "contact",
    element: <Contact />,
    title: "contact"
  },
  {
    path: "about",
    element: <About />,
    title: "about"
  },
  {
    path: "projects",
    element: <Projects />,
    title: "projects"
  }
];

export default pagesData;