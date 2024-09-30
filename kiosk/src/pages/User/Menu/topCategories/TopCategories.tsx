import CardCategories from "@/components/Card/Card";
import { Grid } from "@mui/material";
import { dummyTopCategories } from "./dummyTopCategories";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/common/utils/urlCleaner";

const TopCategories = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    const slug = slugify(id);
    navigate(`/${slug}`);
  }
  return (
    <Grid container spacing={6} justifyContent="center" alignItems="center">
      {dummyTopCategories.map((category) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={category.id}
          display="flex"
          justifyContent="center"
        >
          <CardCategories
            title={category.title}
            images={category.image}
            onClick={() => handleClick(category.title)}
            sx={{
              cursor: "pointer",
              ":hover": { color: "red", textDecoration: "underline" },
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCategories;
