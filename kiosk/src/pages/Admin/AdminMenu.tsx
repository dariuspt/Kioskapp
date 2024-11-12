import { Grid, Paper } from "@mui/material";
import Sidebar from "./Dashboard/SideBar";
import Orders from "./Orders/Orders";

const AdminMenu = () => {
  return (
    <Grid container sx={{ height: "100vh", marginTop:'30px' }}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid xs={8}>
        <Paper elevation={7}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdminMenu;
