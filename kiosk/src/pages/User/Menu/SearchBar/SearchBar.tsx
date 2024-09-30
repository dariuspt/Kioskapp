import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Autocomplete,
  InputAdornment,
  Typography,
  CardContent,
  Box,
  Card,
  CardMedia,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { productList } from "./productList";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/common/utils/urlCleaner";

const SearchBar = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    const slug = slugify(id);
    console.log(slug);
    navigate(`/product/${slug}`);
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={10} sm={8}>
          <Autocomplete
            freeSolo
            options={productList}
            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.name
            }
            value={searchValue}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                setSearchValue(newValue); // FreeSolo input
              } else if (newValue && typeof newValue === "object") {
                setSearchValue(newValue.name); // Selected product object
              } else {
                setSearchValue(""); // Clear the input
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Introduceți un nume de produs, un brand sau o problemă de sănătate"
                variant="outlined"
                fullWidth
                onChange={(e) => setSearchValue(e.target.value)}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            PaperComponent={(props) => (
              <Paper
                {...props}
                sx={{ padding: 2, maxHeight: 400, overflowY: "auto" }}
              />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                <Card
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                  onClick={() => handleClick(option.name)}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: "contain",
                      marginRight: 2,
                    }}
                    image={option.image_url}
                    alt={option.name}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="body1" component="div">
                      {option.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="body1" color="error">
                        {option.price} Lei
                      </Typography>
                    </Box>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={(event) => {
                      event.stopPropagation();
                      addToCart(option);
                      setSearchValue("");
                    }} // Add to cart on click
                    sx={{
                      marginLeft: "auto",
                      backgroundColor: "#28a745",
                      ":hover": { backgroundColor: "#218838" },
                    }}
                  >
                    Adaugă în coș
                  </Button>
                </Card>
              </li>
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
