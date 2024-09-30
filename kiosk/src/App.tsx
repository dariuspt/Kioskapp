import { Routes, Route } from "react-router-dom";
import "./global.css";
import "./i18n";
import { mainRoutes } from "./common/routes/mainRoutes";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid style={{ height: "100vh", overflowY: "auto" }}>
      <Routes>
        {mainRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Grid>
  );
};

export default App;
