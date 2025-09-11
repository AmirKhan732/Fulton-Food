import React from "react";
import Home from "./screens/Home/Home";
import Menu from "./screens/Menu";
import Blogs from "./screens/Blogs";
import Contact from "./screens/Contact";
import About from "./screens/About";
import FAQs from "./screens/FAQs";
import BlogDetail from "./screens/BlogDetail";
import TermsAndConditions from "./screens/TermsandConditions";

const routesConfig = [
  { path: "/", element: <Home />, webLayout: true },
  { path: "/menu", element: <Menu />, webLayout: true },
  { path: "/blogs", element: <Blogs />, webLayout: true },
  { path: "/contact", element: <Contact />, webLayout: true },
  { path: "/about", element: <About />, webLayout: true },
  { path: "/faqs", element: <FAQs />, webLayout: true },
  {path:"termsandconditions",element:<TermsAndConditions/> ,webLayout:true},
  {path:"blogdetail/:id",element:<BlogDetail/> ,webLayout:true},
  

];

export default routesConfig;
