import { Grid } from "@mui/material";
import Sidebar from "./Dashboard/SideBar";

const AdminMenu = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item >
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default AdminMenu;
