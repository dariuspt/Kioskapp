import { Grid } from "@mui/material";
import { products } from "./dummyData";
import { ProductCard } from "@/components/GridProducts/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselProducts = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden", 
      }}
    >
      <Grid item xs={12}>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          showDots={true}
          partialVisible={false}
        >
          {products.map((product, index) => (
            <Grid
              item
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProductCard product={product} onClick={() => handleClick(product.title)} />
            </Grid>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default CarouselProducts;
