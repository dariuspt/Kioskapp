import { Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/common/utils/urlCleaner";
import { useProducts } from "@/resources/userProduct";

const GridProducts = ({ addToCart, categoryId }) => {
  const navigate = useNavigate();
  const { products } = useProducts();
  const handleClick = (id) => {
    const slug = slugify(id);
    navigate(`/product/${slug}`);
  };
  const filteredProducts = products?.filter(
    (product) =>
      slugify(product.category_name) ===
      slugify(categoryId)
  );

  console.log(filteredProducts, "products");

  if (!filteredProducts || !Array.isArray(filteredProducts)) {
    return <div>Loading products...</div>; // You can customize this message
  }

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
      {filteredProducts.map((product, index) => (
        <Grid item key={index}>
          <ProductCard
            product={product}
            onClick={() => handleClick(product.name)}
            addToCart={addToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridProducts;
