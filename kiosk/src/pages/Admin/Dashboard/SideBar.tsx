import { Drawer, MenuItem, Typography, SxProps, useMediaQuery, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

interface SidebarProps {
  width?: number;
  children?: React.ReactNode;
  sx?: SxProps | any;
}

const Sidebar = ({ children, sx }: SidebarProps) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 1024px) and (max-height: 1366px)");
  const [open, setOpen] = useState(!isSmallScreen);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClick = (id: string) => {
    if (id === "orders") {
      navigate("/orders");
    } else {
      navigate("/products");
    }
    // If it's a temporary drawer, close it after selection
    if (isSmallScreen) {
      toggleDrawer();
    }
  };

  return (
    <>
      {/* Add a Menu button for small screens to open the Drawer */}
      {isSmallScreen && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{ position: "fixed", top: 16, left: 16 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"} // Change Drawer variant based on screen size
        open={open}
        onClose={toggleDrawer} // Handle close for temporary drawer
        sx={{
          width: isSmallScreen ? 0 : 240, // Hide width when closed on small screens
          position: "flex",
        }}
      >
        {!children ? (
          <>
            <MenuItem
              id="products"
              sx={{ marginTop: 5, marginBottom: 5 }}
              onClick={() => handleClick("products")}
            >
              <Typography variant="h5">Products</Typography>
            </MenuItem>
            <MenuItem id="orders" onClick={() => handleClick("orders")}>
              <Typography variant="h5">Orders</Typography>
            </MenuItem>
            <MenuItem id="categories" onClick={() => handleClick("categories")}>
              <Typography variant="h5">Categories</Typography>
            </MenuItem>
          </>
        ) : (
          children
        )}
      </Drawer>
    </>
  );
};


export default Sidebar;
