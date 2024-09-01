import CardCategories from "@/components/Card/Card";
import { Grid } from "@mui/material";
import { dummyTopCategories } from "./dummyTopCategories";
import { useNavigate } from "react-router-dom";

const TopCategories = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <Grid
      container
      gap={4}
      justifyContent="center"
      alignItems="center"
      display="flex"
      marginLeft={25}
    >
      {dummyTopCategories.map((category) => (
        <Grid>
          <CardCategories
            key={category.id}
            title={category.title}
            images={category.image}
            onClick={() => handleClick(category.title)}
            sx={{
              cursor: "pointer",
              ":hover": { color: "red", textDecoration: "underline" },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCategories;
