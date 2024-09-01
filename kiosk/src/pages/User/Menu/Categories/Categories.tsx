import { Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import UserSidebar from "../sideBar/UserSidebar";
import GridProducts from "@/components/GridProducts/GridProducts";
import { dummyData } from "./dummyData";
import { dummyTopCategories } from "../topCategories/dummyTopCategories";
import CardCategories from "@/components/Card/Card";

const Categories = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Grid container spacing={3}>
      {/* Sidebar */}
      <Grid item xs={12} md={2}>
        <UserSidebar />
      </Grid>

      {/* Main Content */}
      <Grid item xs={12} md={10}>
        {/* Title */}
        <Typography
          variant="h5"
          sx={{ marginBottom: 10, fontWeight: "bolder", marginTop: 10 }}
        >
          {id}
          <span> (260)</span>
        </Typography>

        {/* Categories */}
        <Grid
          container
          spacing={2}
          sx={{ marginBottom: 5, display: "flex", justifyContent: "center" }}
        >
          {dummyData.some((data) => data.label === id) &&
            dummyTopCategories.map((category) => (
              <Grid item key={category.id}>
                <CardCategories
                  title={category.title}
                  images={category.image}
                  sx={{
                    cursor: "pointer",
                    ":hover": { color: "red", textDecoration: "underline" },
                  }}
                />
              </Grid>
            ))}
        </Grid>

        {/* Products */}
        <Grid container spacing={3}>
          <GridProducts />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
