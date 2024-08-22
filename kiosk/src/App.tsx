import { Routes, Route } from "react-router-dom";
import "./global.css";
import "./i18n";
import { mainRoutes } from "./common/routes/mainRoutes";

const App = () => {
  return (
    <Routes>
      {mainRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
