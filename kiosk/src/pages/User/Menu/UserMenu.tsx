import { Grid, Typography } from "@mui/material";

import TopCategories from "./topCategories/TopCategories";
import UserSidebar from "./sideBar/UserSidebar";
import CarouselProducts from "./Carousel/Carousel";

const UserMenu = () => {
  
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item>
        <UserSidebar />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          height: "20vh",
        }}
      >
        <TopCategories />
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          marginTop: 15,
          flexGrow: 1,
          marginLeft: 50,
          width: "100%",

        }}
      >
        <Typography variant="h5">Top Produse</Typography>
      </Grid>
      <Grid
        item
        sx={{
          marginLeft: 45,
          width: "100%",
          overflowX: "hidden",
          marginTop: 5,
        }}
      >
        <CarouselProducts />
      </Grid>
    </Grid>
  );
};

export default UserMenu;
