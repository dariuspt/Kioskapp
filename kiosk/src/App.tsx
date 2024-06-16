import { Routes, Route } from "react-router-dom";
import { Menu, Home, Products, StartingScreen } from "./_root/pages";
import "./global.css";
import "./i18n";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartingScreen />} index />
      <Route path="/:id/menu" element={<Menu />} index />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Products />} />
    </Routes>
  );
};

export default App;
