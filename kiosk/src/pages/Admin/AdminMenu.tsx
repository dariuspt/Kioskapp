import { Grid } from "@mui/material";
import Sidebar from "./Dashboard/SideBar";
import Orders from "./Orders/Orders";

const AdminMenu = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9} sx={{ padding: 2 }} >
      <Orders />
      </Grid>
    </Grid>
  );
};

export default AdminMenu;
