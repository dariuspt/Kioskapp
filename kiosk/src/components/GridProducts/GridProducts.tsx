import { Grid } from "@mui/material";
import { products } from "./dummyProducts";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";

const GridProducts = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Grid
      container
      spacing={3}
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      {products.map((product, index) => (
        <Grid item key={index}>
          <ProductCard product={product} onClick={() => handleClick(product.title)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridProducts;
