//pagina unui produs

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "@/resources/userProduct";

const Product = () => {

  const { id } = useParams();
  const { products} = useProducts();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const product = products ? products.find((p) => p.name === id) : null;

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      {/* Product Image */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img
            src={product?.image_url}
            alt={product?.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Product Title */}
          <Typography variant="h4" gutterBottom>
            {id}
          </Typography>

          {/* Product Description */}
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {product?.description}
          </Typography>

          {/* Price */}
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ marginTop: "20px" }}
          >
            {product?.price} RON
          </Typography>

          {/* Quantity Selector */}
          <div
            style={{ marginTop: "20px", display: "flex", alignItems: "center" }}
          >
            <Typography variant="body1" style={{ marginRight: "10px" }}>
              Quantity:
            </Typography>
            <TextField
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1 }}
              style={{ width: "60px" }}
              size="small"
            />
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            size="large"
            style={{
              marginTop: "20px",
              backgroundColor: "#28a745", // Green color for the button
              color: "white",
            }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      {/* Reviews Section */}
      {/* <div style={{ marginTop: "40px" }}>
        <Typography variant="h6" gutterBottom>
          Customer Reviews
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.reviews}
        </Typography>
      </div> */}

      {/* Related Products */}
      {/* <div style={{ marginTop: "40px" }}>
        <Typography variant="h6" gutterBottom>
          Related Products
        </Typography>

        <Grid container spacing={4}>
          {product.relatedProducts.map((relatedProduct) => (
            <Grid item xs={12} sm={6} md={4} key={relatedProduct.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={relatedProduct.imageUrl}
                  alt={relatedProduct.title}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    {relatedProduct.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div> */}
    </Container>
  );
};

export default Product;
