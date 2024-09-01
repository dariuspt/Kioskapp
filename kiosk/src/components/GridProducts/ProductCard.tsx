import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
} from "@mui/material";

 export type Props = {
  product: any;
  onClick?: () => void,
};

export const ProductCard = ({ product, onClick } : Props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        textAlign: "center",
        cursor: "pointer",
        "&:hover": {
          "& .product-title": {
            color: "red",
            textDecoration: "underline",
          },
        },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="160"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ transition: "color 0.3s ease" }}
          className="product-title"
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {product.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5" color="error">
          {product.price}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4caf50", color: "white", mt: 2, mb: 2 }}
        >
          Adauga in cos
        </Button>
        <Typography variant="body2" color="green">
          {product.availability}
        </Typography>
      </CardContent>
    </Card>
  );
};
