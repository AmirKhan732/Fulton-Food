import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import routesConfig from "./routesConfig";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
