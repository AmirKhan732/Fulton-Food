import React from "react";
import Home from "./screens/Home/Home";
import Menu from "./screens/Menu";
import Blogs from "./screens/Home/Blogs";
import Contact from "./screens/Contact";
import About from "./screens/About";

const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
];

export default routesConfig;
