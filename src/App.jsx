import "./App.css";
import { Route, Routes } from "react-router-dom";
import routesConfig from "./routesConfig";
import WebLayout from "./components/WebLayout/WebLayout";
function App() {
  return (
    <>
      <Routes>
        {routesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.webLayout ? (
                <WebLayout>{route.element}</WebLayout>
              ) : (
                route.element
              )
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
