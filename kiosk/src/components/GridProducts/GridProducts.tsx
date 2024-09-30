import { Grid } from "@mui/material";
import { products } from "./dummyProducts";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/common/utils/urlCleaner";

const GridProducts = ({ addToCart }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    const slug = slugify(id);
    navigate(`/product/${slug}`);
  };
  return (
    <Grid
      container
      spacing={3}
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      {products.map((product, index) => (
        <Grid item key={index}>
          <ProductCard
            product={product}
            onClick={() => handleClick(product.title)}
            addToCart={addToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridProducts;
