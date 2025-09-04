import React from "react";
import Home from "./screens/Home/Home";
import Menu from "./screens/Menu";
import Blogs from "./screens/Blogs";
import Contact from "./screens/Contact";
import About from "./screens/About";

const routesConfig = [
  { path: "/", element: <Home />, webLayout: true },
  { path: "/menu", element: <Menu />, webLayout: true },
  { path: "/blogs", element: <Blogs />, webLayout: true },
  { path: "/contact", element: <Contact />, webLayout: true },
  { path: "/about", element: <About />, webLayout: false },
];

export default routesConfig;
